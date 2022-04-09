import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BackendModule} from "../backend/backend.module";
import {RefresherComponent} from "./components/refresher/refresher.component";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {ToastModule} from "primeng/toast";
import {NgxCaptchaModule} from "ngx-captcha";


@NgModule({
  declarations: [
    LoginComponent,
    RefresherComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BackendModule,
        HttpClientModule,
        PasswordModule,
        ButtonModule,
        InputTextModule,
        TranslateModule,
        ToastModule,
        NgxCaptchaModule
    ],
  exports:[
    LoginComponent,
    RefresherComponent
  ]
})
export class LoginModule { }
