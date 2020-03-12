import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any;
  user: any;
  _id: any;
  newUser: any;
  loginUser: any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getUsersFromService();
    this.newUser = {first_name: '', last_name: '', password: '', birthday: '' };
    this.loginUser = { email: '', password: ''};
  }
  delete(id) {
    const observable = this._httpService.delete(id);
    observable.subscribe(user => { console.log( 'Successfully deleted the user', user);
    this.getUsersFromService();
    });
  }
  resetUser() {
    this.newUser = {first_name: '', last_name: '', email: '', password: '' };
  }
  onSubmit() {
    const observable = this._httpService.addUser(this.newUser);
    observable.subscribe(data => { console.log( 'Got data from post back', data);
    this.newUser = {first_name: '', last_name: '', email: '', password: ''  };
    this.resetUser();

    });
  }
  onLogin(loginUser) {
    const observable = this._httpService.authenticate(this.loginUser);
    observable.subscribe(data => { console.log( 'Got data from login', data);
    this.loginUser = {email: '', password: ''};
    this.goDashboard();

    });
  }
  goDashboard() {
    this._router.navigate(['/dashboard']);
  }
  getUsersFromService() {
    const observable = this._httpService.getUsers();
    observable.subscribe(data => { console.log('Got our users', data);
    this.users = data;
    });
    }
}
