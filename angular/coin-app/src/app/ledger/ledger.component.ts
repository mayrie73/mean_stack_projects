import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  ledger = [];
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.showLedger();
  }
  showLedger() {
    const tempLedger = this._httpService.getLedger();
    this.ledger = tempLedger;
    console.log('ledger: ', this.ledger);
}

}





