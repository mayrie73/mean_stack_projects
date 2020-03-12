import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  newBike: any;
  bikes: any;
  bike: any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newBike = {title: '', description: '', price: '', location: ''};
  }
  resetBike() {
    this.newBike = {title: '', description: '', price: '', location: ''};
  }
  onSubmitBike() {
    const observable = this._httpService.addBike(this.newBike);
    observable.subscribe(data => { console.log( 'Got data from post back', data);
    this.newBike = {title: '', description: '', price: '', location: ''};
    this.resetBike();
    });
  }

}


