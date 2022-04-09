import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './components/logout/logout.component';
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    LogoutComponent
  ],
  exports: [
    LogoutComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class LogoutModule { }
