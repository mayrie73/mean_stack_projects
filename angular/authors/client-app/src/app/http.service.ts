import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { }
  getAuthors() {
    return this._http.get('/authors');
    }
    getAuthor(id) {
      return this._http.get(`/authors/${id}`);
    }
    addAuthor(newAuthor) {
      return this._http.post('/authors', newAuthor);
    }
    delete(id) {
      return this._http.delete(`/authors/${id}`);
    }
    showAuthor(id) {
      return this._http.get(`/authors/${id}`);
    }
    update(updatedAuthor) {
      console.log(updatedAuthor);
      console.log('inservice');
      return this._http.put('/authors/' + updatedAuthor._id, updatedAuthor);
    }
}
