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
import {CommonModule, DatePipe} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {SkillsComponent} from "./skills/skills.component";
import {EducationComponent} from "./education/education.component";
import {ExperienceComponent} from "./experience/experience.component";
import {SharingService} from "./sharing-service";
import {IntroductionComponent} from "./introduction/introduction.component";
import {CalendarModule} from "primeng/calendar";
import {CheckboxModule} from "primeng/checkbox";
import {TreeSelectModule} from "primeng/treeselect";
import { GenerateComponent } from './generate/generate.component';
import {ImageModule} from "primeng/image";
import { LanguagesComponent } from './languages/languages.component';
import {DropdownModule} from "primeng/dropdown";


@NgModule({
  declarations: [
    StepsComponent,
    PersonalComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    IntroductionComponent,
    GenerateComponent,
    LanguagesComponent
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
        InputTextareaModule,
        CalendarModule,
        CheckboxModule,
        TreeSelectModule,
        ImageModule,
        DropdownModule
    ],
  providers:[TicketService,SharingService,DatePipe],
  exports:[
    StepsComponent,
    PersonalComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    IntroductionComponent,
    GenerateComponent,
    LanguagesComponent

  ]
})
export class StepsDemoModule { }
