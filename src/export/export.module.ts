import {TranslateModule} from "@ngx-translate/core";
import {NgModule} from "@angular/core";
import {ExportComponent} from "./components/export.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ExportRoutingModule} from "./export-routing.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ExportComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ExportRoutingModule,
    TranslateModule,
    FormsModule
  ],
  exports:[
    ExportComponent
  ]
})
export class ExportModule { }
