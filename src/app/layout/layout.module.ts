import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { TopNavbarComponent } from './component/top-navbar/top-navbar.component';
import { FiltersComponent } from '../filters/filters.component';



@NgModule({
  declarations: [
    LayoutComponent,
    TopNavbarComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
