import { Component, OnInit } from '@angular/core';
import {Experience, Resume} from "../resume";
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";
declare let pdfMake: any ;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  resume = new Resume();
  submitted: boolean = false;

  constructor(private router: Router,public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.resume=JSON.parse(sessionStorage.getItem('resume') || '{}');

  }

  addExperience() {
    this.resume.experiences.push(new Experience());
  }

  nextPage() {
    this.router.navigate(['/steps/education']);
    this.submitted = true;
    sessionStorage.setItem('resume', JSON.stringify(this.resume));

    return;
  }

  previousPage() {
    this.router.navigate(['/steps/languages']);
    sessionStorage.setItem('resume', JSON.stringify(this.resume));
    this.submitted = true;
  }

}
