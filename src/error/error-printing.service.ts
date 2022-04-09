import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Error} from "./model/error"
import {ErrorCode} from "./model/errorCode";

@Injectable({
  providedIn: 'root'
})
export class ErrorPrintingService {

  constructor() { }

  private errorSource = new BehaviorSubject<Error>({errorCode: {} as ErrorCode} as Error);

  error$ = this.errorSource.asObservable();

  printError(error: Error) {
    this.errorSource.next(error);
  }

}
