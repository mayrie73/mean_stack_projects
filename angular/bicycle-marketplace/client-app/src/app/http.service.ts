import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { }
  getUsers() {
    return this._http.get('/users');
    }
    getUser(id) {
      return this._http.get(`/users/${id}`);
    }
    addUser(newUser) {
      return this._http.post('/users', newUser);
    }
    authenticate(loginUser) {
      console.log(loginUser);
      return this._http.post('/session', loginUser);
    }
    delete(id) {
      return this._http.delete(`/users/${id}`);
    }
    showAuthor(id) {
      return this._http.get(`/users/${id}`);
    }
    update(updatedUser) {
      console.log(updatedUser);
      console.log('inservice');
      return this._http.put('/users/' + updatedUser._id, updatedUser);
    }
    addBike(newBike) {
      return this._http.post('/bikes', newBike);
    }
}

