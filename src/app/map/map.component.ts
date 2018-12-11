import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoursquareComponent } from '../foursquare/foursquare.component';
import {FlickrService} from '../services/flickr.service';
import {Observable} from 'rxjs';
import {FoursquareService} from '../services/foursquare.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  inputs: ['showRest']
})
export class MapComponent implements OnInit {

  DEFAULT_MAP_ZOOM = 12;
  DEFAULT_MAP_LAT = 56.8770413;
  DEFAULT_MAP_LNG = 14.8092744;

  markers: Array<any> = [];
  restMarkers: Array<any> = [];

  public constructor(private flickrService: FlickrService, private foursquareService: FoursquareService) { }
  
  ngOnInit() {
      this.initFlickr();
      this.initFoursquare();
  }
//Function for subscribing to the observable in my foursquareservice(getting the open coffee shops available on foursquare)
  initFoursquare() {
    this.foursquareService.getFQ().subscribe( (res) => {
        for (var i = 0; i < res.length; i++) {
            const item = res[i];
            const lat = item.lat;
            const lng =  item.lng;
            const name = item.name;
            const icon =  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Coffee_cup_icon.svg/30px-Coffee_cup_icon.svg.png';
            const loc = item.location;
            const restMarker = {lat: lat, lng: lng, title: name, location: loc, iconUrl: icon};
            //Pushing my variables into a marker array which I output on the map
            this.restMarkers.push(restMarker);
        } 
    });
  }
   
  initFlickr() {
    const args: Object = {lat: 56.8770413, lon: 14.8092744, radius: 4, per_page: 10000, has_geo: true};

    this.flickrService.search(args)
      .subscribe((response) => {
          const items = response['photos']['photo'];

          for (const item of items) {
            this.getLocationFromPhotos(item, item.id);
          }
        },
        error => console.error(error)
      );
  }


  getLocationFromPhotos(item, id) {
    this.flickrService.getLocation(id)
      .subscribe((response) => {
          this.appendToMap(item, response);
        },
        error => console.error(error)
      );
  }

  appendToMap(item, geoInfo) {
    const lati = Number(geoInfo.photo.location.latitude);
    const langi =  Number(geoInfo.photo.location.longitude);
    const imgSrc = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_q.jpg';
    const marker = {lat: lati, lang: langi, title: item.title, img: imgSrc};
    this.markers.push(marker);

  }
  
}
