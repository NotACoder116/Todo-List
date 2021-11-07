import { Component, OnInit } from '@angular/core';
import { filtersType } from '../shared/constants/list-filters.components';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  public filtersType = filtersType;               // Store all the filter types
  public selectedFilterValue: number = 0;         // Selected filter value
  public todoList: any;                           // All the todo list data
  public filteredList: any;                       // Store todo list of selected filtered data
  constructor(private sharedService: SharedService) { }
  ngOnInit(): void {
    //Get the todo list of all the available data
    this.sharedService._todoList.subscribe((response) => {
      this.todoList = response;
    })
  }

  // Sort The data according to selected filter
  selectedFilter(filter: filter) {
    this.selectedFilterValue = filter.value;
    if (this.selectedFilterValue == filtersType.All) {
      this.filteredList = this.todoList;
    }
    else {
      this.filteredList = this.todoList.filter((data: any) => {
        if (this.selectedFilterValue == filtersType.Incompleted) {
          if (!data.completed) {
            return data;
          }
        }
        else if (this.selectedFilterValue == filtersType.Completed) {
          if (data.completed) {
            return data;
          }
        }
        else if (this.selectedFilterValue == filtersType['Completed Today']) {
          let currentDate = new Date();
          if (data.completedDate && data.completed && currentDate.setHours(0, 0, 0, 0) == data.completedDate.setHours(0, 0, 0, 0)) {
            return data;
          }
        }
      })
    }
    this.sharedService.setFilteredList(this.filteredList);
  }
}

export interface filter {
  key: string,
  value: number
}
