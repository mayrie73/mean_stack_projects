import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors: any;
  author: any;
  _id: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthorsFromService();
  }
  delete(id) {
    const observable = this._httpService.delete(id);
    observable.subscribe(author => { console.log( 'Successfully deleted the task', author);
    this.getAuthorsFromService();
    });
  }
  getAuthorsFromService() {
    const observable = this._httpService.getAuthors();
    observable.subscribe(data => { console.log('Got our tasks', data);
    this.authors = data;
    });
    }
}
