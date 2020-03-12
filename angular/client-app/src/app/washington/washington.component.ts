import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  main = {};
  name: string;
  constructor(private _httpService: HttpService ) {
}
ngOnInit() {
  this.getWashingtonWeather();
}
getWashingtonWeather() {
  const observable = this._httpService.getWashingtonWeather();
  observable.subscribe( data => {
    this.main = data['main'];
    this.name = data['name'];
    console.log( 'Got Washington', data );
  });
}
}
