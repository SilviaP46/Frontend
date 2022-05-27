import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpInterceptor, HttpParams} from "@angular/common/http";
import {BackendService} from "src/backend/backend.service";
import {Observable} from "rxjs";
import {User} from "../user/models/user";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private backendService: BackendService, private http: HttpClient) { }

  register(firstName:string, lastName:string,username: string, password: string, email:string){
    let token='Bearer '+ sessionStorage.getItem('token')!;
    let options={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token, content-type'
      })
    };

    let params=new HttpParams().set('firstName',firstName).set('lastName',lastName).set('username', username).set('password', password).set('email',email);
    return this.backendService.post('http://localhost:4201/register', params,options);
  }

}
