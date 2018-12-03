import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
var socket = io.connect('localhost:3000');

@Component({
  selector: 'app-foursquare',
  templateUrl: './foursquare.component.html',
  styleUrls: ['./foursquare.component.scss']
})
export class FoursquareComponent implements OnInit {

	constructor() {
	  	socket.on("res", function(res) {
	  		//console.log(body);
	  		//res = JSON.parse(body);
	  		console.log(res);
	  		for (var i = 0; i < res.response.groups[0].items.length; i++) {
   				var item = res.response.groups[0].items[i];
   				console.log(item.venue.name);
			}
	  	});
	}	

	ngOnInit() {		
		
	}
}
