import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/services.component";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  dbUser: User = {} as User;
  newUser: User = {} as User;

  exportedID: string="";
  exportedUsername: string="";
  exportedFirstName: string="";
  exportedLastName: string="";
  exportedEmail: string="";
  exportedMobileNumber: string="";
  exportedTypeButton: string="";
  exportedStatus: string="";

  subscription: Subscription = new Subscription();

  //inactive: boolean = false;
  active: boolean = true;


  constructor(private userService:UserService,private route: ActivatedRoute) {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  ngOnInit(): void {
    //this.getUserRoles()
    this.subscription = this.route
      .paramMap
      .subscribe(params => {
        this.exportedID=params.get('id')!;
        this.exportedUsername=params.get('username')!;
        this.exportedFirstName=params.get('firstName')!;
        this.exportedLastName=params.get('lastName')!;
        this.exportedEmail=params.get('email')!;
        this.exportedMobileNumber=params.get('mobileNumber')!;
        this.exportedTypeButton=params.get('typeButton')!;
        this.exportedStatus=params.get("status")!;
      });

    if(this.exportedTypeButton==="update"){
      this.getData();
    }

  }



  getData(){
    this.userService.getUserFromDB(this.exportedUsername).subscribe(res =>{
      this.dbUser=res;
      this.newUser=this.dbUser;
    })
  }

}

