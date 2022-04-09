import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import {FormsModule} from "@angular/forms";
import { UserListComponent } from './components/user-list/user-list.component';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

import {RouterModule} from "@angular/router";

import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {ProgressBarModule} from "primeng/progressbar";
import {RippleModule} from "primeng/ripple";
import {InputSwitchModule} from "primeng/inputswitch";
import {MultiSelectModule} from "primeng/multiselect";
import {InputMaskModule} from "primeng/inputmask";
import {ToolbarModule} from "primeng/toolbar";
import {DialogModule} from "primeng/dialog";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ToastModule} from "primeng/toast";
import {TranslateModule} from "@ngx-translate/core";
import {ScrollTopModule} from "primeng/scrolltop";

import {AuthInterceptor} from "../login/interceptor/AuthInterceptor";
import {UserRoutingModule} from "./user-rounting.module";

@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    ],
  exports: [
    UserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    RouterModule,
    UserRoutingModule,
    TableModule,
    DropdownModule,
    ProgressBarModule,
    RippleModule,
    InputSwitchModule,
    MultiSelectModule,
    InputMaskModule,
    ToolbarModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    TranslateModule,
    ScrollTopModule
  ],

  bootstrap:    [ UserComponent ],

  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi   : true,
  }],


})
export class UserModule { }
