import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Role} from "../../models/Role";
import {Permission} from "../../models/Permission";

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.component.html',
  styleUrls: ['./refresher.component.scss']
})
export class RefresherComponent implements OnInit {

  constructor(private loginService: LoginService) {
    let intervalId = setInterval(this.refresh, 5000, loginService);

  }



  ngOnInit(): void {
  }


  refresh(service: LoginService){
    if(sessionStorage.getItem('username')!==null){
      service.login(sessionStorage.getItem('username')!, sessionStorage.getItem('password')!).subscribe(
        data=>{
          sessionStorage.setItem('token', data.token);
        }
      )
    }

  }

}
