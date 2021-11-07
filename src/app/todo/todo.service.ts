import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' }),
};
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=10';
  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get(`${this.todoUrl + this.todosLimit}`);
  }
}
