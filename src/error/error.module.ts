import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPrinterComponent } from './error-printer/error-printer.component';
import {ErrorPrintingService} from "./error-printing.service";
import {HttpErrorInterceptor} from "./http-error.interceptor";
import {ToastModule} from "primeng/toast";



@NgModule({
  declarations: [
    ErrorPrinterComponent
  ],
  imports: [
    CommonModule,
    ToastModule
  ],exports: [
    ErrorPrinterComponent
  ],
  providers: [
    ErrorPrintingService,
    HttpErrorInterceptor
  ]
})
export class ErrorModule { }
