import {MenuItem, MessageService} from "primeng/api";
import {Subscription} from "rxjs";
import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {TicketService} from "./ticketservice";

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class StepsComponent implements OnInit {

  items: MenuItem[]

  subscription: Subscription

  constructor(public messageService: MessageService, public ticketService: TicketService) {}

  ngOnInit() {
    this.items = [{
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
