import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import {FoursquareService} from '../services/foursquare.service';
import { Observable } from 'rxjs';
import * as io from "socket.io-client";
var socket = io.connect('localhost:3000');

@Component({
  selector: 'app-foursquare',
  templateUrl: './foursquare.component.html',
  styleUrls: ['./foursquare.component.scss'],
  providers: [ FoursquareService ],

})


export class FoursquareComponent implements OnInit {

	restaurants: Array<any> = [];
	empty: any = '';

	public constructor(private foursquareService:FoursquareService) { }
	
	ngOnInit() {
		//Retrieving the shops from the foursquare service and passing them to the empty array called restaurants 
		this.foursquareService.getFQ().subscribe( (res) => {
			this.restaurants = res;	
			//Checking if there are any shops open, if not a text will be displayed in the html
			if (this.restaurants.length === 0) {
				this.empty = 'There is sadly no recommended coffee shop open right now :(';
			} else {
				this.restaurants = res;	
			}
			
		});
	}    
}
