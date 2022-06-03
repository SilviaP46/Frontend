import {Component, OnInit} from '@angular/core';
import {Job} from "../job";
import {JobsService} from "../services/jobs.service";
import {Subscription} from "rxjs";
import {MessageService} from "primeng/api";
@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})

export class ExportComponent {

  jobs:Job[]=[];
  subscription: Subscription = new Subscription();
  selectedJob:Job;
  keywords:string;
  displayPosition: boolean;
  position: string;

  constructor(private jobService: JobsService,private messageService: MessageService) { }

  ngOnInit() {
    this.jobs=JSON.parse(sessionStorage.getItem('jobs') || '{}');
    console.log(this.jobs);
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

  findJobs(){
    console.log(this.keywords)
    this.subscription.add(
      this.jobService.getJobs(this.keywords).subscribe( (jobs) => {
        this.jobs = jobs;
        sessionStorage.setItem('jobs', JSON.stringify(this.jobs));
      }));
    this.showPositionDialog('top');

  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }

}
