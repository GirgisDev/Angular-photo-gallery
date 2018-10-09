import { Component, OnInit } from '@angular/core';
import { PhotosService } from './../../services/photos.service';

@Component({
  selector: 'gallery-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: Array<any> = [];

  constructor(private photosService: PhotosService) { }

  ngOnInit() {
    this.photosService.testFlicker().subscribe(res => {
      this.images = res['photos'].photo;
    })
  }

}
