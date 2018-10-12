import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private tags = "dogs"
  private apiBaseUrl = "https://api.flickr.com/services/rest/?method=flickr."
  private apiURLs = {
    url: this.apiBaseUrl + "photos.search&api_key=8dda69764bfd6a77f90a735f46321fb3&per_page=100&content_type=photos&extras=date_taken,owner_name,description&format=json&nojsoncallback=1&tags=",
    userPhotosUrl: this.apiBaseUrl +  "people.getPhotos&api_key=8dda69764bfd6a77f90a735f46321fb3&per_page=100&extras=date_taken,owner_name,description&format=json&nojsoncallback=1&user_id=",
    userInfoUrl: this.apiBaseUrl + "people.getInfo&api_key=8dda69764bfd6a77f90a735f46321fb3&format=json&nojsoncallback=1&user_id="
  };

  constructor(private http: HttpClient) { }

  getDogs(tags, pageNum) {
    return this.http.get(this.apiURLs.url + (tags.length ? (tags + '+dogs') : this.tags) + '&page=' + (pageNum || 0));
  }
  getPhotosOf(userId, pageNum) {
    return this.http.get(this.apiURLs.userPhotosUrl + userId + '&page=' + (pageNum || 0));
  }
  getUserInfo(userId) {
    return this.http.get(this.apiURLs.userInfoUrl + userId);
  }
}
