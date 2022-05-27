import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {StepsComponent} from "./steps.component";

const routes: Routes = [
  {
    path: '',
    component: StepsComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepsRoutingModule { }

