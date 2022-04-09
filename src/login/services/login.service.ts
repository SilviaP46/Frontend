import {Inject, Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders, HttpInterceptor, HttpParams} from "@angular/common/http";
import {BackendService} from "../../backend/backend.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  constructor(private backendService: BackendService, private http: HttpClient) { }



  login(username: string, password: string){
    let params=new HttpParams().set('user', username).set('password', password);
    return this.backendService.post('http://localhost:4201/login', params);
  }

}
