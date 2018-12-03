import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { WeatherComponent } from './weather/weather.component';
import { CareerComponent } from './career/career.component';
import { CareerResultComponent } from './career/career-result/career-result.component';
<<<<<<< HEAD
import { WikiComponent } from './wiki/wiki.component';
=======
import { FoursquareComponent } from './foursquare/foursquare.component';
>>>>>>> 77c717bcbf107ae9cd0705e0bc58ab9d17597384

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherComponent,
    CareerComponent,
    CareerResultComponent,
    WikiComponent,
    FoursquareComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDs0WJS-0UQ8F3N-8qhxyPXDniFVmS0uHQ'
    })
  ],
  providers: [],
  entryComponents: [CareerResultComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
