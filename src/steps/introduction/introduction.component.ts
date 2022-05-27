import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Resume} from "../resume";
import {Router} from "@angular/router";
import {SharingService} from "../sharing-service";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class IntroductionComponent implements OnInit {

  resume = new Resume();

  constructor(private router: Router,private sharingService:SharingService) { }

  ngOnInit(): void {
    this.resume=this.sharingService.getData();
    this.sharingService.setData(this.resume);
  }

  nextPage() {
    sessionStorage.setItem('created','true');
    this.router.navigate(['/steps/personal']);
    return;
  }
}
