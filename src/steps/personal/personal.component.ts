import {Component, Input, OnInit, ViewEncapsulation} from "@angular/core";
import {Router} from "@angular/router";
import {TicketService} from "../ticketservice";
import {Education, Experience, Resume, SoftSkill, HardSkill} from "../resume";
import {ScriptService} from "../../export/components/script.service";
import {SharingService} from "../sharing-service";
declare let pdfMake: any ;

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonalComponent implements OnInit {

  personalInformation: any;
  submitted: boolean = false;
  resume = new Resume();

  degrees = ['B.E.', 'M.E.', 'B.Com', 'M.Com'];


  constructor(public ticketService: TicketService, private router: Router,private scriptService: ScriptService,private sharingService:SharingService) { }

  ngOnInit():void {

    console.log(sessionStorage.getItem('resume'));
    const resumeJson=sessionStorage.getItem('resume');
    this.resume = resumeJson !== null ? JSON.parse(resumeJson) : new Resume();


    if (!this.resume.experiences || this.resume.experiences.length === 0) {
      this.resume.experiences = [];
      this.resume.experiences.push(new Experience());
    }
    if (!this.resume.educations || this.resume.educations.length === 0) {
      this.resume.educations = [];
      this.resume.educations.push(new Education());
    }
    if (!this.resume.skillsS || this.resume.skillsS.length === 0) {
      this.resume.skillsS = [];
      this.resume.skillsS.push(new SoftSkill());
    }

    if (!this.resume.skillsH || this.resume.skillsH.length === 0) {
      this.resume.skillsH = [];
      this.resume.skillsH.push(new HardSkill());
    }

    console.log('Loading External Scripts');
    this.scriptService.load('pdfMake', 'vfsFonts');
  }

  fileChanged(e: Event) {
    // @ts-ignore
    const file = e.target.files[0];
    this.getBase64(file);
  }

  // @ts-ignore
  getBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.resume.profilePic = reader.result as string;
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }


  nextPage() {
    this.router.navigate(['/steps/skills']);
    //this.sharingService.setData(this.resume);
    sessionStorage.setItem('resume', JSON.stringify(this.resume));
    this.submitted = true;
  }

  previousPage() {
    this.router.navigate(['/steps/introduction']);
    //this.sharingService.setData(this.resume);
    sessionStorage.setItem('resume', JSON.stringify(this.resume));
    this.submitted = true;
  }

}
