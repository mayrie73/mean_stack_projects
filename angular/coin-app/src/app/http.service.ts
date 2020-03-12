import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
 ledger = [];
 balance = 0;
 value = 1;
 question: any;
 answer: any;
 allAlgorithm = [{question: 'What is the 3rd Fibonacci number?', answer: '2'},
  {question: 'What is the 4th Fibonacci number?', answer: '3'},
  {question: 'What is the 5th Fibonacci number?', answer: '5'},
  {question: 'What is the 6th Fibonacci number?', answer: '8'},
  {question: 'What is the 7th Fibonacci number?', answer: '13'},
  {question: 'What is the 9th Fibonacci number?', answer: '34'}];

  constructor(private _http: HttpClient) { }
  getAlgorithm() {
    const num = Math.floor(Math.random() * 6) + 1;
    return this.allAlgorithm[num];
  }
  mineCoin() {
    const num = Math.floor(Math.random() * 1000) + 1;
    const transaction = {id: num, action: 'mine', amount: '1', value: this.value};
    this.ledger.push(transaction);
    this.balance += 1;
    this.value += 1;
    console.log('Mine ledger: ', this.ledger);
    console.log('Mine balance: ', this.balance);
  }
  buyCoin(num) {
    const id = Math.floor(Math.random() * 1000) + 1;
    const transaction = {id: id, action: 'buy', amount: num, value: this.value};
    this.ledger.push(transaction);
    this.value += 1;
    this.balance += (num);

    console.log('Buy ledger: ', this.ledger);
    console.log('Buy balance: ', this.balance);
  }
  sellCoin(num) {
    const id = Math.floor(Math.random() * 1000) + 1;
    const transaction = {id: id, action: 'sell', amount: num, value: this.value};
    this.ledger.push(transaction);
    this.value -= 1;
    this.balance -= num;
    console.log('Buy ledger: ', this.ledger);
    console.log('Buy balance: ', this.balance);
  }
  getValue() {
    return this.value;
  }

  getBalance() {
    return this.balance;
  }

  getLedger() {
    return this.ledger;
  }

}
