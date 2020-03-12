import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getChicagoWeather();
    this.getBurbankWeather();
    this.getDallasWeather();
    this.getWashingtonWeather();
    this.getSeattleWeather();
    this.getSanJoseWeather();
   }
   getChicagoWeather() {
    const chicago = this._http.get('http://api.openweathermap.org/data/2.5/weather?q=chicago&APPID=33c469e9db5aa9b6910e66b5cc3f4f0c');
    return chicago;
  }
  getBurbankWeather() {
    const burbank = this._http.get('http://api.openweathermap.org/data/2.5/weather?q=burbank&APPID=33c469e9db5aa9b6910e66b5cc3f4f0c');
    return burbank;
  }
  getDallasWeather() {
    const dallas = this._http.get('http://api.openweathermap.org/data/2.5/weather?q=dallas&APPID=33c469e9db5aa9b6910e66b5cc3f4f0c');
    return dallas;
  }
  getWashingtonWeather() {
    const dc = this._http.get('http://api.openweathermap.org/data/2.5/weather?q=washington&APPID=33c469e9db5aa9b6910e66b5cc3f4f0c');
    return dc;
  }
  getSeattleWeather() {
    const seattle = this._http.get('http://api.openweathermap.org/data/2.5/weather?q=seattle&APPID=33c469e9db5aa9b6910e66b5cc3f4f0c');
    return seattle;
  }
  getSanJoseWeather() {
    const sanJose = this._http.get('http://api.openweathermap.org/data/2.5/weather?q=oakland&APPID=33c469e9db5aa9b6910e66b5cc3f4f0c');
    return sanJose;
  }
}


