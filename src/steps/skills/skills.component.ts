import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Resume, Skill} from "../../export/resume";
import {TicketService} from "../ticketservice";
import {Router} from "@angular/router";
import {ScriptService} from "../../export/components/script.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {


  submitted: boolean = false;
  resume = new Resume();

  addSkill() {
    this.resume.skills.push(new Skill());
  }

  nextPage() {

    this.router.navigate(['/steps/experience']);
    this.submitted = true;

      return;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
