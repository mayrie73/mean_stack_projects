import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) { }
  getProducts() {
    return this._http.get('/products');
    }
    getProduct(id) {
      return this._http.get(`/products/${id}`);
    }
    addProduct(newAuthor) {
      return this._http.post('/products', newAuthor);
    }
    delete(id) {
      return this._http.delete(`/products/${id}`);
    }
    showProduct(showProduct) {
      console.log(showProduct);
      console.log('inservice');
      return this._http.put('/products/' + showProduct._id, showProduct);
    }
    update(updatedProduct) {
      console.log(updatedProduct);
      console.log('inservice');
      return this._http.put('/products/' + updatedProduct._id, updatedProduct);
    }
}
