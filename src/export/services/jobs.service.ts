import {Injectable} from "@angular/core";
import {BackendService} from "../../backend/backend.service";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private backendService: BackendService) { }

  getJobs(keywords:string){
    let param=new HttpParams().set('keywords', keywords);
    return this.backendService.get('http://localhost:4201/getJobs',param);
  }

}
