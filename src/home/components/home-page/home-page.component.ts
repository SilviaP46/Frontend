import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {

  }

  getUsername() {
    return sessionStorage.getItem('username');
  }

}
