import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  main = {};
  name: string;
  constructor(private _httpService: HttpService ) {
}
ngOnInit() {
  this.getChicagoWeather();
}
getChicagoWeather() {
  const observable = this._httpService.getChicagoWeather();
  observable.subscribe( data => {
    this.main = data['main'];
    this.name = data['name'];
    console.log( 'Got Chicago', data );
  });
}
}
