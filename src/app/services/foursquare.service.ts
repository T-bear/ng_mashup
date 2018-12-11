import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import io from 'socket.io-client';
var socket = io.connect('localhost:3000');

@Injectable({
  providedIn: 'root'
})

export class FoursquareService {
	restaurants: Array<any> = [];
	constructor() {	}
	//Observable for retrieving the coffee shops from the server, iterating through the array to get the relevant data 
  	getFQ(): Observable<any> {
  		return Observable.create(observer => {
			socket.on("res", function (res) {
	  				var restaurants = [];
			  		for (var i = 0; i < res.response.groups[0].items.length; i++) {
		   				var item = res.response.groups[0].items[i];
		   				console.log(item);
						restaurants.push({
							'name': item.venue.name,
							'location': item.venue.location.address,
							'lat': item.venue.location.lat,
							'lng': item.venue.location.lng
						});
					}
				observer.next(restaurants);		
			});
  		});
  	}
  	ngOnInit(){}
}