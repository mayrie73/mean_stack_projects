import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  showProduct: any;
  products: any;
  id: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }
  ngOnInit() {
    let id = '';
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      id = params['id'];
    });
    const observable = this._httpService.getProduct(id);
    observable.subscribe(data => {
      console.log('Got our show product!', data);
      this.showProduct = data;
    });
  }
  onSubmitShow() {
    console.log(this.showProduct);
    const observable = this._httpService.showProduct(this.showProduct);
    observable.subscribe(data => {
      console.log('updated our show product!', data);
      console.log(this.showProduct);
      this.showProduct = { name: '', quantity: '', price: '' };
      this.goHome();
    });
  }
  delete(id) {
    const observable = this._httpService.delete(id);
    observable.subscribe(product => { console.log( 'Successfully deleted the task', product);
    this.getProductsFromService();
    });
  }
  getProductsFromService() {
    const observable = this._httpService.getProducts();
    observable.subscribe(data => { console.log('Got our tasks', data);
    this.products = data;
    });
    }
  goHome() {
    this._router.navigate(['/products']);
  }
}
