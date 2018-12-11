import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) {

  }

  search() {
    var query = "https://www.googleapis.com/youtube/v3/search/?location=56.879005,14.805852&locationRadius=20km&part=snippet&type=video&key=AIzaSyADq_Ezv7YnJb8IKc4A66gxvXL6yWvJCu0";
    return this.http.get(query);
  }
}
