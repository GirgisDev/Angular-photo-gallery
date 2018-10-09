import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private apiData = {
    url: "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=286f1cd4e6363ab5fa482e031e5b0465&per_page=100&format=json&nojsoncallback=1&auth_token=72157696393586900-aacf523b833cc689&api_sig=88ddccfd2f3aec19f2375c6702a9cece",
    searchUrl: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=286f1cd4e6363ab5fa482e031e5b0465&tags=keyword&per_page=100&format=json&nojsoncallback=1&auth_token=72157696393586900-aacf523b833cc689&api_sig=de004a20aad191521b60ffb46f733372",
    // key: "d6020e509061114a236c4e3a0dbe5e8d",
    secret: "28df46f7d33e2eee"
  };

  constructor(private http: HttpClient) { }

  testFlicker() {
    return this.http.get(this.apiData.url)
  }
  searchFlicker() {
    return this.http.get(this.apiData.searchUrl)
  }
}
