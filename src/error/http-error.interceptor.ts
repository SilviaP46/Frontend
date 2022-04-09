import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";
import {ErrorPrintingService} from "./error-printing.service";
import {Error} from "./model/error";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private errorPrintingService : ErrorPrintingService) {

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: any) => {
        let errorMsg = '';
        if (error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error}`;
        }
        else {
          errorMsg = `Error Code: ${JSON.stringify(error.error.errorCode)},  Message: ${JSON.stringify(error.error.message)},
           Timestamp: ${error.error.timestamp}`;
        }
        let newError = {} as Error;
        newError.errorCode = error.error.errorCode;
        newError.timestamp = error.error.timestamp;
        newError.message = error.error.message;

        this.errorPrintingService.printError(newError);
        return throwError(errorMsg);
      }));
  }
}
