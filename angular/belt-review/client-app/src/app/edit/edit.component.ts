import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  updatedProduct: any;
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
    console.log('Got our updated product!', data);
    this.updatedProduct = data;
  });
  }
  onSubmitUpdate() {
    console.log(this.updatedProduct);
    const observable = this._httpService.update(this.updatedProduct);
    observable.subscribe(data => {
    console.log('updated our product!', data);
    console.log(this.updatedProduct);
    this.updatedProduct = {name: '', quantity: '', price: ''};
    this.goHome();
   });
  }
  goHome() {
    this._router.navigate(['/products']);
  }
}
