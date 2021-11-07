import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { SharedService } from '../shared/shared.service';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  todoDetailsList: any;
  notCompletedCounter: number = 0;
  constructor(private sharedService: SharedService, private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos()
      .pipe(
        map((data: any) => {
          return data.map((res: any)=> {
            if (!res.completed) {
              this.notCompletedCounter++;
              res.completedDate = null;
              return res;
            }
            else {
              res.completedDate = new Date("11/21/2011");
              return res;
            }
          })
        })).subscribe(todos => {
          let todoDetailsList: any = todos;
          this.sharedService.setFilteredList(todoDetailsList);
          this.sharedService.setTodoList(todoDetailsList);
          this.sharedService.setCounterMethods(this.notCompletedCounter);
        });
  }
}
