import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {

  response: any;
  videoUrlArr: Array<string>;

  constructor(private youtubeService: YoutubeService) {

  }

  ngOnInit() {
    this.initYoutube();
  }

  initYoutube() {
    this.youtubeService.search().subscribe((response) => {
      this.response = response.items;
      for (let video of this.response) {
        this.videoUrlArr.push("https://www.youtube.com/embed/" + video.id.videoId); // create separate list with urls
      }
    },
    error => console.error(error)
    );
  }
}