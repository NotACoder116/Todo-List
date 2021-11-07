import { Component, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { SharedService } from '../shared/shared.service';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoDetailsList: any;
  notCompletedCounter: number = 0;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService._filteredList.subscribe((todos) => {
      this.todoDetailsList = todos;
    })
  }
}
