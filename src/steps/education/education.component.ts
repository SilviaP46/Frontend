import { Component, OnInit } from '@angular/core';
import {Details, Education,Resume} from "../resume";
import {SharingService} from "../sharing-service";
import {Router} from "@angular/router";
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  submitted: boolean = false;
  resume = new Resume();
  degrees:any[]=[];
  types:any[]=[];


  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.resume=JSON.parse(sessionStorage.getItem('resume') || '{}');
    this.degrees = [
      {label: 'General School Diploma'},
      {label: 'High School Diploma'},
      {label: 'Bachelors Degree'},
      {label: 'Masters Degree'},
      {label: 'Doctorate Degree'},
    ];

    this.types = [
      {label: 'Hobbies'},
      {label: 'Accomplishments'},
      {label: 'Personal Projects'}
    ];

  }

  previousPage() {
    this.router.navigate(['/steps/experience']);
    sessionStorage.setItem('resume', JSON.stringify(this.resume));
    this.submitted = true;

  }

  nextPage() {
    this.router.navigate(['/steps/generate']);
    this.submitted = true;
    sessionStorage.setItem('resume',JSON.stringify(this.resume));
    console.log(this.resume.otherDetails[0].type)
    return;
  }

  addEducation() {
    this.resume.educations.push(new Education());
  }

  addDetails() {
    this.resume.otherDetails.push(new Details());
  }

  removeEducation(index:number){
    this.resume.educations.splice(index,1);
  }

  removeDetails(index:number){
    this.resume.otherDetails.splice(index,1);
  }

}
