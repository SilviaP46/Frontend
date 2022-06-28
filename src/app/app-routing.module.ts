import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "../login/components/login/login.component";
import {HomeGuard} from "../navigation/components/guards/HomeGuard";
import {LoginGuard} from "../navigation/components/guards/LoginGuard";
import {RegisterGuard} from "../navigation/components/guards/RegisterGuard";
import {PersonalComponent} from "../steps/personal/personal.component";
import {SkillsComponent} from "../steps/skills/skills.component";
import {StepsComponent} from "../steps/steps.component";
import {ExperienceComponent} from "../steps/experience/experience.component";
import {EducationComponent} from "../steps/education/education.component";
import {RegisterComponent} from "../register/components/register.component";
import {IntroductionComponent} from "../steps/introduction/introduction.component";
import {GenerateComponent} from "../steps/generate/generate.component";
import {LanguagesComponent} from "../steps/languages/languages.component";



const routes: Routes = [
  /*{path:'**', component: Error404Component}*/

  {
    path: '',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
    canActivate: [HomeGuard]
  },
  {
    path: 'home',
    //pathMatch:'full',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
    canActivate: [HomeGuard]
  },

  {
    path: 'export',
    loadChildren: () => import('../export/export.module').then(m => m.ExportModule),
    canActivate: [HomeGuard]
  },

  {
    path: 'login',
    component: LoginComponent,
    //canActivate: [LoginGuard]

  },
  {
    path: 'register',
    component: RegisterComponent,
    //canActivate: [RegisterGuard]

  },
  {
    path: 'steps',
    component: StepsComponent,

    children:[
      {path: '', redirectTo: 'introduction', pathMatch: 'full'},
      { path: 'introduction', component: IntroductionComponent},
      { path: 'personal', component: PersonalComponent },
      { path: 'skills', component: SkillsComponent},
      { path: 'languages', component: LanguagesComponent},
      { path: 'experience', component: ExperienceComponent},
      { path: 'education', component: EducationComponent},
      { path: 'generate', component: GenerateComponent}
    ],
    canActivate: [HomeGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
