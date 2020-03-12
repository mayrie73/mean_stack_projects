import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
    id: any = '';
    amount: any  = '';
    action = '';
    constructor(private _route: ActivatedRoute, private _httpService: HttpService) { }
    ngOnInit() {
      this._route.paramMap.subscribe(params => {
        console.log(params.get('id'));
        this.id = params.get('id');
        console.log('id: ', this.id);
        const ledger = this._httpService.getLedger();
        for (const transaction of ledger) {
          if (transaction['id'] === this.id) {
            this.action = transaction['action'];
            this.amount = transaction['amount'];
            break;
          }
        }
      });
    }
  }
