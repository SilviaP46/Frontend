import {ErrorCode} from "./errorCode";

export interface Error{
  errorCode : ErrorCode,
  timestamp : Date,
  message : string
}
