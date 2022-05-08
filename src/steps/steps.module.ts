import {NgModule} from "@angular/core";
import {StepsComponent} from "./steps.component";
import {ToastModule} from "primeng/toast";
import {RouterModule} from "@angular/router";
import { StepsModule } from 'primeng/steps';
import {TicketService} from "./ticketservice";
import {StepsRoutingModule} from "./steps-routing.module";
import {PersonalComponent} from "./personal/personal.component";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {SkillsComponent} from "./skills/skills.component";
import {EducationComponent} from "./education/education.component";
import {ExperienceComponent} from "./experience/experience.component";


@NgModule({
  declarations: [
    StepsComponent,
    PersonalComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent
  ],
  imports: [
    ToastModule,
    RouterModule,
    StepsModule,
    StepsRoutingModule,
    CardModule,
    ButtonModule,
    FormsModule,
    CommonModule,
    InputTextModule,
    InputTextareaModule

  ],
  providers:[TicketService],
  exports:[
    StepsComponent,PersonalComponent,SkillsComponent,EducationComponent,ExperienceComponent

  ]
})
export class StepsDemoModule { }
