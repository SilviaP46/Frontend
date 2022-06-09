import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import {LogoutModule} from "../logout/logout.module";
import {AppTranslateModule} from "../translate/translate.module";
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";
import {LoginGuard} from "./components/guards/LoginGuard";
import {HomeGuard} from "./components/guards/HomeGuard";
import {RegisterGuard} from "./components/guards/RegisterGuard";


@NgModule({
  declarations: [
    NavigationComponent
  ],
  exports: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    LogoutModule,
    TranslateModule,
    AppTranslateModule,
    RouterModule,
  ],
  providers:[
    LoginGuard,
    RegisterGuard,
    HomeGuard
  ]
})
export class NavigationModule { }
