import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  product: any;
  _id: any;
  constructor(private _httpService: HttpService)  { }

  ngOnInit() {
    this.getProductsFromService();
  }
  getProductsFromService() {
    const observable = this._httpService.getProducts();
    observable.subscribe(data => { console.log('Got our products', data);
    this.products = data;
    });
    }
}
