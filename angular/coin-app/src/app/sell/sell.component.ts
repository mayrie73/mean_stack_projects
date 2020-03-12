import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  answer: any = '';
  value = 0;
  balance = 0;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.balance = this._httpService.getBalance();
    this.value = this._httpService.getValue();
  }
  sellCoin() {
    console.log('this.answer:', this.answer);
    if (this.balance >= (this.answer)) {
      this._httpService.sellCoin(this.answer);
      this.balance = this._httpService.getBalance();
      this.value = this._httpService.getValue();
      this.answer = '';
    } else {
      console.log('Error: Insufficient Funds');
    }
  }
}
