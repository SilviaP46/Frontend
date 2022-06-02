import {Injectable} from "@angular/core";
import {BackendService} from "../../backend/backend.service";

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private backendService: BackendService) { }

  getJobs(){
    return this.backendService.get('http://localhost:4201/getJobs');
  }

}
