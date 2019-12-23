import { getHasWriteFromCookie, getHasDeleteFromCookie, getHasReadFromCookie, getHasAdminFromCookie } from '../services/cookie';


export class AccountModel {


  static token: String = localStorage.getItem("token");
  static hasWrite = getHasWriteFromCookie()
  static hasDelete = getHasDeleteFromCookie()
  static hasRead = getHasReadFromCookie()
  static hasSuperPermission: boolean = getHasAdminFromCookie()
  constructor() { }

}
