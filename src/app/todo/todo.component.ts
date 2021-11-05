import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoDetailsList: any;
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todoDetailsList = todos;
      console.log(this.todoDetailsList)
    });
  }
  onToggle(todo: any) {
    //toggle in UI
    todo.completed = !todo.completed;
    //toogle in devServerTarget
    this.todoService
      .toggleCompleted(todo)
      .subscribe((todo) => console.log(todo));
  }

  

}
