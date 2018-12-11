import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {WikiComponent} from '../wiki/wiki.component'
import {text} from "@angular/core/src/render3";


@Injectable({
  providedIn: 'root'
})
export class WikiService {
  /** Test on chaning the text in apuUrl */
  text: string;
  /** The url for wikipedias API endpoint */
  apiUrl = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&utf8=1&srsearch=Växjö"

  constructor(private http: HttpClient) { }

  /** Test on chaning the text in apuUrl */
  setText(text: string) {
    this.text = text;
  }
  /** Test on chaning the text in apuUrl */
  getText() {
    return this.text;
  }

  getWiki(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
