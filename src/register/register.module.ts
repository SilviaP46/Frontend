import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BackendModule} from "../backend/backend.module";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {ToastModule} from "primeng/toast";
import {NgxCaptchaModule} from "ngx-captcha";
import {RegisterComponent} from "./components/register.component";
import {FileUploadModule} from "primeng/fileupload";


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    BackendModule,
    HttpClientModule,
    PasswordModule,
    ButtonModule,
    InputTextModule,
    TranslateModule,
    ToastModule,
    NgxCaptchaModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[
    RegisterComponent,
  ]
})
export class RegisterModule { }
