import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  main = {};
  name: string;
  constructor(private _httpService: HttpService ) {
}
ngOnInit() {
  this.getDallasWeather();
}
getDallasWeather() {
  const observable = this._httpService.getDallasWeather();
  observable.subscribe( data => {
    this.main = data['main'];
    this.name = data['name'];
    console.log( 'Got Dallas', data );
  });
}
}
