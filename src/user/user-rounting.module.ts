import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from "./components/user-list/user-list.component";
import {UserComponent} from "./components/user/user.component";



const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    children: [
      {
        path: 'userProfile',
        component: UserComponent
      }
    ]
  },
  {
    path: ':id',
    component: UserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
