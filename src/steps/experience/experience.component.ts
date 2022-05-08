import { Component, OnInit } from '@angular/core';
import {Experience, Resume} from "../../export/resume";
import {Router} from "@angular/router";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  resume = new Resume();
  submitted: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addExperience() {
    this.resume.experiences.push(new Experience());
  }

  nextPage() {

    this.router.navigate(['/steps/education']);
    this.submitted = true;

    return;
  }

}
