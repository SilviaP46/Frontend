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

  /*currentDate(){

    this.resume.experiences.forEach(experience => {
      if(experience.current)
        experience.endDate="present";
      else {

        var datePipe = new DatePipe('en-US');
        //let ed = datePipe.transform(experience.endDate, 'MM/yyyy');
        //let ed=experience.endDate;
        experience.endDate =datePipe.transform(experience.endDate, 'MM/yyyy');
      }
      var datePipe2 = new DatePipe('en-US');
      //let sd=experience.startDate;
      experience.startDate =datePipe2.transform(experience.startDate, 'MM/yyyy');

    });

    console.log(this.resume.experiences);
  }*/


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
