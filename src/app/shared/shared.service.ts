import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public returnCounter: number = 0;
  public userDetails: Object = {};
  public todoList: any = [];
  public filteredList : any = [];
  _returnCounter = new BehaviorSubject(0);
  _userDetails = new BehaviorSubject<Object>({});
  _todoList = new BehaviorSubject<Object>([]);
  _filteredList = new BehaviorSubject<Object>([]);
  constructor() { }

  // Store the unchecked data count
  setCounterMethods(value: number) {
    this.returnCounter = value;
    this._returnCounter.next(this.returnCounter);
  }

  // Store the details of the loggedin user 
  setUserDetails(value: any) {
    this.userDetails = value;
    this._userDetails.next(this.userDetails);
  }

  // Store all the todo lists
  setTodoList(value: any) {
    this.todoList = value;
    this._todoList.next(this.todoList);
  }

  // Store the list of data that is following the selected filter
  setFilteredList(value: any) {
    this.filteredList = value;
    this._filteredList.next(this.filteredList);
  }

  logoutUser() {
    this.setFilteredList({});
    this.setUserDetails({});
  }
}
