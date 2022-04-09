import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";

import {LoginComponent} from "../login/components/login/login.component";
import {HomeGuard} from "../navigation/components/guards/HomeGuard";
import {UserGuard} from "../navigation/components/guards/UserGuard";
import {LoginGuard} from "../navigation/components/guards/LoginGuard";
import {ExportGuard} from "../navigation/components/guards/ExportGuard";



const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
    canActivate: [HomeGuard]
    //loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    pathMatch:'full',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
    canActivate: [HomeGuard]
    //loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },

  {
    path: 'export',
    loadChildren: () => import('../export/export.module').then(m => m.ExportModule),
    canActivate: [ExportGuard]
    //loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'users',
    loadChildren: () => import('../user/user.module').then(m => m.UserModule),
    canActivate: [UserGuard]
  },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
    //loadChildren: () => import('./bugs/bugs.module').then(m => m.BugsModule)
  }/*,

  {path:'**', component: Error404Component}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
