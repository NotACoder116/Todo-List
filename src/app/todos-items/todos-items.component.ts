import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-todos-items',
  templateUrl: './todos-items.component.html',
  styleUrls: ['./todos-items.component.css']
})
export class TodosItemsComponent implements OnInit {
  @Input() todoDetailsList: any;
  @Input() todo: any;
  @Input() indexOfelement: any;
  notCompletedCounter: any;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService._returnCounter.subscribe((data)=> {
      this.notCompletedCounter = data;
    })
  }

  onToggle(todo: any, i: any) {
    todo.completed = !todo.completed;
    if (todo.completed) {                         // If data is checked then decrease the notCompletedCounter and storing the current date
      this.notCompletedCounter--;
      todo.completedDate = new Date;
    }
    else {
      this.notCompletedCounter++;
      todo.completedDate = null;
    }
    this.todoDetailsList[i] = todo;
    this.sharedService.setTodoList(this.todoDetailsList);
    this.sharedService.setCounterMethods(this.notCompletedCounter);
  }
}
