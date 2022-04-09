import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import {LogoutModule} from "../logout/logout.module";
import {AppTranslateModule} from "../translate/translate.module";
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";
import {LoginGuard} from "./components/guards/LoginGuard";
import {UserGuard} from "./components/guards/UserGuard";
import {HomeGuard} from "./components/guards/HomeGuard";
import {ExportGuard} from "./components/guards/ExportGuard";


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
    UserGuard,
    HomeGuard,
    ExportGuard
  ]
})
export class NavigationModule { }
