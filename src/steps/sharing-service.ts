import {Injectable} from "@angular/core";
import {Resume} from "./resume";

@Injectable()
export class SharingService{
  private resume:Resume;
  private readonly :boolean;

  setData(resume:any){
    this.resume = resume;
  }

  getData():any{
    console.log(this.resume);
    return this.resume;
  }

  setReadOnly(ro:boolean){
    this.readonly = ro;
  }

  getReadOnly():any{
    return this.readonly;
  }


}
