import {MenuItem, MessageService} from "primeng/api";
import {Subscription} from "rxjs";
import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {SharingService} from "./sharing-service";

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class StepsComponent implements OnInit {

  items: MenuItem[]

  subscription: Subscription

  readOnly:boolean

  constructor(public messageService: MessageService,public sharingService:SharingService) {}

  ngOnInit() {

    this.readOnly=true
    this.sharingService.setReadOnly(this.readOnly);

    this.items = [{
      label: 'Introduction',
      routerLink: 'introduction'
    },
      {
      label: 'Personal',
      routerLink: 'personal'
      },
      {
        label: 'Skills',
        routerLink: 'skills'
      },
      {
        label: 'Languages',
        routerLink: 'languages'
      },
      {
        label: 'Experience',
        routerLink: 'experience'
      },
      {
        label: 'Education',
        routerLink: 'education'
      },
      {
        label: 'Generate',
        routerLink: 'generate'
      }
    ];

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
