import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newProduct: any;
  products: any;
  product: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newProduct = {name: '', quantity: '', price: ''};
  }
  resetAuthor() {
    this.newProduct = {name: '', quantity: '', price: ''};
  }
  onSubmit() {
    const observable = this._httpService.addProduct(this.newProduct);
    observable.subscribe(data => { console.log( 'Got data from post back', data);
    this.newProduct = {name: '', quantity: '', price: ''};
    this.resetAuthor();

    });
  }
}
