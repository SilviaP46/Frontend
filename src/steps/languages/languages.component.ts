import {Component, OnInit} from '@angular/core';
import {Certifications, Languages, Resume} from "../resume";
import {Router} from "@angular/router";
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  submitted: boolean = false;
  resume = new Resume();
  items: SelectItem[];
  item: string = "";
  levels: any[] = [];

  constructor(private router: Router) {
    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({label: 'Item ' + i, value: 'Item ' + i});
    }
  }

  ngOnInit(): void {
    this.resume = JSON.parse(sessionStorage.getItem('resume') || '{}');
    this.levels = [
      {label: 'Basic User (A1)'},
      {label: 'Basic User (A2)'},
      {label: 'Independent User (B1)'},
      {label: 'Independent User (B2)'},
      {label: 'Proficient User (C1)'},
      {label: 'Proficient User (C2)'}
    ];
  }

  addLanguage() {
    this.resume.languages.push(new Languages());
  }

  addCertification() {
    this.resume.certifications.push(new Certifications());
  }

  nextPage() {
    this.router.navigate(['/steps/experience']);
    this.submitted = true;
    sessionStorage.setItem('resume', JSON.stringify(this.resume));

    return;
  }

  previousPage() {
    this.router.navigate(['/steps/skills']);
    this.submitted = true;
    sessionStorage.setItem('resume', JSON.stringify(this.resume));

  }

}
