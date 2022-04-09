import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {BackendModule} from "../backend/backend.module";
import {LoginModule} from "../login/login.module";
import {NavigationModule} from "../navigation/navigation.module";
import {AuthInterceptor} from "../login/interceptor/AuthInterceptor";
import {BadgeModule} from "primeng/badge";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpErrorInterceptor} from "../error/http-error.interceptor";
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";
import {ErrorModule} from "../error/error.module";
import { ExportComponent } from '../export/components/export.component';



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayPanelModule,
    TableModule,
    ButtonModule,
    ToastModule,
    HttpClientModule,
    BackendModule,
    BrowserAnimationsModule,
    LoginModule,
    NavigationModule,
    MessageModule,
    MessagesModule,
    FormsModule, ReactiveFormsModule, NgxCaptchaModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }), ErrorModule
  ],
  providers: [MessageService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },{
    provide :HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  },
    BadgeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}


