import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private tags = "dogs"
  private apiData = {
    url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d6020e509061114a236c4e3a0dbe5e8d&per_page=100&format=json&nojsoncallback=1&tags=",
  };

  constructor(private http: HttpClient) { }

  getDogs() {
    return this.http.get(this.apiData.url + this.tags)
  }
  searchDogs(tags) {
    if (!tags.length) return;
    return this.http.get(this.apiData.url + tags + '+dogs')
  }
}
