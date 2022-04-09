import { Injectable } from '@angular/core';
import {BackendService} from "../../backend/backend.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private backendService: BackendService, private httpClient:HttpClient) { }

  getUserFromDB(username: string): Observable<User> {
    return this.httpClient.get<User>("http://localhost:4201/users/find/"+username);
  }
  updateUser(data: User): Observable<User>{
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
    return this.httpClient.post<User>("http://localhost:4201/users/update", data, options);
  }

  addUser(data: User): Observable<User>{
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
    return this.httpClient.post<User>("http://localhost:4201/users/add", data, options);
  }

  getUsers() {
    return this.backendService.get("http://localhost:4201/users");
  }
  activateUser(id: number){
    let token='Bearer '+ sessionStorage.getItem('token')!;
    let options={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token, content-type'
      })
    };
    return this.httpClient.put<User>("http://localhost:4201/users/activate/"+id, options);
  }

  deactivateUser(id: number){
    let token='Bearer '+ sessionStorage.getItem('token')!;
    let options={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token, content-type'
      })
    };
    return this.httpClient.put<User>("http://localhost:4201/users/deactivate/"+id, options);
  }
}

