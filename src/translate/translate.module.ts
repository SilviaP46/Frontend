import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeLanguageComponent } from './components/change-language/change-language.component';
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {TableModule} from "primeng/table";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    ChangeLanguageComponent
  ],
  exports: [
    ChangeLanguageComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    ButtonModule,
    OverlayPanelModule,
    TableModule,
    TranslateModule,

  ]
})
export class AppTranslateModule { }
