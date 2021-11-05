import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LayoutResolverService } from './layout-resolver.service';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // resolve: {
    //   data: LayoutResolverService
    // },
    children: [
      {
        path: 'todo',
        loadChildren: () => import('../todo/todo.module').then(m => m.TodoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
