import { Component, OnInit } from '@angular/core';
import { WikiService } from '../services/wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {
  /** An array that will contain the Wikipedia data retrieved from wiki.services.ts */
  wikis = [];
  /** Contains a hardcoded word used to display in the input in wiki.component.html, this is for a test on changing the text in the URL in apiUrl in wiki.services.ts */
  wikiSearch = 'Växjö';
  /** test on changing the text in apiUrl in wiki.services.ts  */
  text: string;
  constructor(private wikiService: WikiService) { }

  ngOnInit() {
    /** Retrieve data from the apiUrl in wiki.service.ts  */
    this.wikiService.getWiki().subscribe( (res) => {
      /** Sort out what data to be displayed later in wiki.component.html */
      this.wikis = res.query.search;

      
    });
  }
  getText() {
    /** Test on chaning the text in apuUrl in wiki.services.ts */
    this.text = this.wikiSearch;
    console.log(this.wikiService.getText)
  }

}
