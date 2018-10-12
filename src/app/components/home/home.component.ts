import { Component, OnInit } from '@angular/core';
import { PhotosService } from './../../services/photos.service';

@Component({
  selector: 'gallery-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading: boolean = false;
  images: Array<any> = [];
  pageNum: number = 1;
  keyword: string = '';

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.loading = true;
    this.photosService.getDogs(this.keyword, this.pageNum).subscribe(res => {
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

  searchDogs(value, pageNum) {
    if (!value.length && !this.keyword.length) return;
    this.keyword = value;
    this.loading = true;
    if (pageNum) {
      this.pageNum = pageNum;
      this.images = [];
    }
    this.photosService.getDogs(value, this.pageNum).subscribe(res => {
      this.onSucess(res);
    }, err => this.onErr(err));
  }

  onScroll() {
    this.pageNum += 1;
    this.getPhotos();
  }

}
