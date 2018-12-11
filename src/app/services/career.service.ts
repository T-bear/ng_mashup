import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor(private http: HttpClient) { }

  getJobs(title: string) {
    const url = 'https://celtest1.lnu.se/mashup/php/CareerService.php?title=' + title;
    // let url = 'dist/php/CareerService.php?title=' + title;
    return this.http.get(url);
    // .map((res: Response) => res.json());
  }
}
