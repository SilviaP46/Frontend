import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Resume, SoftSkill,HardSkill} from "../resume";
import {Router} from "@angular/router"
import {SharingService} from "../sharing-service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['/skills.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {

  submitted: boolean = false;
  resume = new Resume();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.resume=JSON.parse(sessionStorage.getItem('resume') || '{}');
    console.log(this.resume);

  }

  addSoftSkill() {
    this.resume.skillsS.push(new SoftSkill());
  }
  addHardSkill() {
    this.resume.skillsH.push(new HardSkill());
  }

  nextPage() {
    this.router.navigate(['/steps/experience']);
    this.submitted = true;
    sessionStorage.setItem('resume',JSON.stringify(this.resume));

    return;
  }

  previousPage() {
    this.router.navigate(['/steps/personal']);
    this.submitted = true;
    sessionStorage.setItem('resume',JSON.stringify(this.resume));

  }


}
