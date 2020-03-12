import { Component, OnInit} from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks API';
  tasks: any;
  task: any;
  _id: any;
  toggleEdit = false;
  newTask: any;
  editTask: any;
  users: object[] = [];
  user = {
    name: '',
    email: ''
  };
  constructor(private _httpService: HttpService) {
  }
 myButtonEvent() {
   console.log('Hey look what I did');
 }
 resetTask() {
  this.newTask = {
   title: '',
   description: ''
  };
}
 resetUser() {
   this.user = {
    name: '',
    email: ''
   };
 }
 mySubmitEvent() {
  this.users.push(this.user);
  this.resetUser();
}
  ngOnInit() {
    this.getTasksFromService();
    this.newTask = {title: '', description: ''};
    this.editTask = {id: '', title: '', description: ''};
  }

  onSubmit() {
    const observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => { console.log( 'Got data from post back', data);
    this.newTask = {title: '', description: ''};
    this.resetTask();

    });
  }
  editFieldInfo(task) {
    console.log(task);
    this.editTask.id = task._id;
    this.editTask.title = task.title;
    this.editTask.description = task.description;
    this.toggleEdit = true;
  }
  update(editTask) {
    const observable = this._httpService.update(this.editTask);
    observable.subscribe(task => {
      console.log('editing task', task);
      this.getTasksFromService();
      this.toggleEdit = false;
    });
  }
  toggleEditForm() {
    this.toggleEdit = false;
  }
  delete(id) {
    const observable = this._httpService.delete(id);
    observable.subscribe(task => { console.log( 'Successfully deleted the task', task);
    this.getTasksFromService();
    });
  }
  getTasksFromService() {
    const observable = this._httpService.getTasks();
    observable.subscribe(data => { console.log('Got our tasks', data);
    this.tasks = data;
    });
    }
  }
