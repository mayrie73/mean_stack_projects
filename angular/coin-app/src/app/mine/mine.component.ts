import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  algorithm = {};
  answer: any = '';
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getAlgorithm();
  }

  getAlgorithm(): void {
    const randomAlgorithm = this._httpService.getAlgorithm();
    this.algorithm = randomAlgorithm;
  }
  mineCoin(): void {
    console.log('answer:', this.answer);
    console.log('algorithm: ', this.algorithm);
    if (this.answer === this.algorithm['answer']) {
      this._httpService.mineCoin();
    } else {
      console.log('Wrong Answer');
    }
  }
}
