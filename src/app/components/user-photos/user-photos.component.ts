import { PhotosService } from './../../services/photos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gallery-user-photos',
  templateUrl: './user-photos.component.html',
  styleUrls: ['./user-photos.component.scss']
})
export class UserPhotosComponent implements OnInit {
  images: Array<any> = [];
  userInfo: object = {};
  loading: boolean = false;
  pageNum: number = 1;
  private userId;
  
  constructor(
    private route: ActivatedRoute,
    private photosService: PhotosService
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.getUserInfo();
  }

  getUserInfo() {
    this.loading = true;
    this.photosService.getUserInfo(this.userId).subscribe(res => {
      if (res["stat"] === "ok") {
        this.userInfo = res["person"];
        this.getUserPhotos();
      } else {
        this.loading = false;
        throw res["stat"];
      }
    }, err => this.onErr(err));
  }

  getUserPhotos() {
    this.loading = true;
    this.photosService.getPhotosOf(this.userId, this.pageNum).subscribe(res => {
      this.onSucess(res);
    }, err => this.onErr(err));
  }

  onSucess(res) {
    if (res["stat"] === "ok") {
      this.images = this.images.concat(res["photos"].photo);
      this.loading = false;
    } else {
      this.loading = false;
      throw res["stat"];
    }
  }
  onErr(err) {
    this.loading = false;
    throw err;
  }

  onScroll() {
    this.pageNum += 1;
    this.getUserPhotos();
  }

}
