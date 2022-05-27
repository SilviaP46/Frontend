import {MenuItem, MessageService} from "primeng/api";
import {Subscription} from "rxjs";
import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {TicketService} from "./ticketservice";
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

  constructor(public messageService: MessageService, public ticketService: TicketService,public sharingService:SharingService) {}

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

    this.subscription = this.ticketService.paymentComplete$.subscribe((personalInformation: { firstname: string; lastname: string; }) =>{
      this.messageService.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + personalInformation.firstname + ' ' + personalInformation.lastname + ' your order completed.'});
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
