import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  statuses: any[];

  statusHome: any;
  statusUsers: any;
  statusExport:any;
  statusSteps:any;


  showUsers: boolean = false;


  constructor(private router: Router) {
    this.statusHome = {
      label: "home", value: false
    }
    this.statusUsers = {
      label: "users", value: false
    }
    this.statusExport = {
      label: "export", value: false
    }
    this.statusSteps = {
      label: "steps", value: false
    }

    this.statuses = [this.statusHome, this.statusUsers, this.statusExport, this.statusSteps];
  }

  ngOnInit(): void {
    /*this.showUserNavbar();
    this.showBugNavbar();
    this.showRoleNavbar();*/
  }



  changeStatuses(link: String) {
    for(var status of this.statuses) {
      status.value = link === status.label;
    }
  }

}

