import { Component, OnInit } from '@angular/core';
import {Details, Education,Resume} from "../resume";
import {SharingService} from "../sharing-service";
import {Router} from "@angular/router";
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  submitted: boolean = false;
  resume = new Resume();
  degrees=['General School Diploma','High School Diploma','Bachelors Degree', 'Masters Degree', 'Doctorate Degree'];
  types=['Hobbies','Accomplishments','Personal Projects'];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.resume=JSON.parse(sessionStorage.getItem('resume') || '{}');
    //this.sharingService.setReadOnly(false);

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

    return;
  }

  addEducation() {
    this.resume.educations.push(new Education());
  }

  addDetails() {
    this.resume.otherDetails.push(new Details());
  }

}
