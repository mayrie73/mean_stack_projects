import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  main = {};
  name: string;
  constructor(private _httpService: HttpService ) {
}
ngOnInit() {
  this.getSanJoseWeather();
}
getSanJoseWeather() {
  const observable = this._httpService.getSanJoseWeather();
  observable.subscribe( data => {
    this.main = data['main'];
    this.name = data['name'];
    console.log( 'Got San Jose', data );
  });
}
}
