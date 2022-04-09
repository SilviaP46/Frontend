import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ExportComponent} from "./components/export.component";

const routes: Routes = [
  {
    path: '',
    component: ExportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportRoutingModule { }
