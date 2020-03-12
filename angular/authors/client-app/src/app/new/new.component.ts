import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor: any;
  authors: any;
  author: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newAuthor = {name: '' };
  }
  resetAuthor() {
    this.newAuthor = {name: '' };
  }
  onSubmit() {
    const observable = this._httpService.addAuthor(this.newAuthor);
    observable.subscribe(data => { console.log( 'Got data from post back', data);
    this.newAuthor = {name: ''};
    this.resetAuthor();

    });
  }

}
