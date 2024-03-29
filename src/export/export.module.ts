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
import {EditorModule} from "primeng/editor";
import {TableModule} from "primeng/table";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";



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
        CardModule,
        EditorModule,
        TableModule,
        RippleModule,
        DialogModule,
    ],
  exports:[
    ExportComponent
  ]
})
export class ExportModule { }
