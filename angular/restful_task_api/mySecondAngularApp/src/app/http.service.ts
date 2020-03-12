import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
  }
  getTasks() {
  return this._http.get('/tasks');
  }
  addTask(newtask) {
    return this._http.post('/tasks', newtask);
  }
  update(updatedTask) {
    return this._http.put(`/tasks/${updatedTask.id}`, updatedTask);
  }
  delete(id) {
    return this._http.delete(`/tasks/${id}`);
  }
}

