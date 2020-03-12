import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

constructor(private _http: HttpClient) {
  this.getBooks();
}
getBooks() {
  const tempObservable = this._http.get('/books');
  tempObservable.subscribe(data => console.log('Got our books!', data));
}
}
