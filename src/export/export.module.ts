import {TranslateModule} from "@ngx-translate/core";
import {NgModule} from "@angular/core";
import {ExportComponent} from "./components/export.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ExportRoutingModule} from "./export-routing.module";
import {FormsModule} from "@angular/forms";
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from "primeng/inputtextarea";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";



@NgModule({
  declarations: [
    ExportComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        ExportRoutingModule,
        TranslateModule,
        FormsModule,
        AutoCompleteModule,
        InputTextModule,
        InputTextareaModule,
        ButtonModule,
        CardModule
    ],
  exports:[
    ExportComponent
  ]
})
export class ExportModule { }
