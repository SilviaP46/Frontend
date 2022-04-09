import {Permission} from "./Permission";

export interface Role{
  type: string;
  permissions: Permission[];

}
