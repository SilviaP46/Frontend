import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import {Router} from "@angular/router";
import {ErrorPrintingService} from "../error-printing.service";
import {Error} from "../model/error";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-error-printer',
  templateUrl: './error-printer.component.html',
  styleUrls: ['./error-printer.component.scss'],
  providers: [MessageService]
})
export class ErrorPrinterComponent implements OnInit {

  constructor(private messageService: MessageService, private router: Router, private errorPrintingService : ErrorPrintingService,
              private translateService : TranslateService) {

    errorPrintingService.error$.subscribe(error => {

      this.showError(error)});
  }

  ngOnInit(): void {
  }

  public showError(error: Error) {
    if(sessionStorage.getItem("lang") === "ro"){
      this.translateService.use("ro");
      this.messageService.add({
        severity: 'error',
        summary: "Error code: " + error.errorCode.code,
        detail: this.translateService.instant("errors.code" + error.errorCode.code),
      });
    }
    //Default option (english)
    else{
      this.messageService.add({
        severity: 'error',
        summary: "Error code: " + error.errorCode.code,
        detail: error.errorCode.description,
      });
    }
  }


}
