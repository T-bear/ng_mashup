import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WikiService {
  apiUrl = 'http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=V%C3%A4xj%C3%B6'

  constructor(private http: HttpClient) { }

  getWiki(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
