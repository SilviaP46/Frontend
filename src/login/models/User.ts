import {Role} from "./Role";

export interface User{
   email: string;
   firstName: string;
   lastName: string;
   mobileNumber:string;
   password: string;
   username:string;
   token: string;
   roles: Role[];

}
