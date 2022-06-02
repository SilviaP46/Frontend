import {Component, OnInit} from '@angular/core';
import {Job} from "../job";
import {JobsService} from "../services/jobs.service";
import {Subscription} from "rxjs";
import {MessageService} from "primeng/api";
@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})

export class ExportComponent {

  jobs:Job[]=[];
  subscription: Subscription = new Subscription();
  selectedJob:Job;

  constructor(private jobService: JobsService,private messageService: MessageService) { }

  ngOnInit() {

    this.subscription.add(
      this.jobService.getJobs().subscribe( (jobs) => {
        this.jobs = jobs;
      }));

  }

  goToLink2(event: { link: string | URL | undefined; }){
    window.open(event.link, "_blank");
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

  onRowSelect(event: { data: { name: any; link: string | URL | undefined; }; }) {
    this.messageService.add({severity:'info', summary:'Product Selected', detail: event.data.name});
    window.open(event.data.link, "_blank");
  }

}
