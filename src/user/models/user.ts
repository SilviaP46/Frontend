import {UserStatus} from "./user-status";

export interface User{
  idUser: number
  firstName: string
  lastName: string
  mobileNumber: string
  email: string
  username: string
  password: string
  status: UserStatus

}
