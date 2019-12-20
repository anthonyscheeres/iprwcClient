import { getHasWriteFromCookie, getHasDeleteFromCookie, getHasReadFromCookie, getHasAdminFromCookie } from '../services/cookie';


export class AccountModel {


  static token: String = localStorage.getItem("token");
  static hasWrite: boolean = getHasWriteFromCookie()
  static hasDelete: boolean = getHasDeleteFromCookie()
  static hasRead: boolean = getHasReadFromCookie()
  static hasSuperPermission: boolean = getHasAdminFromCookie()

  constructor() { }

}
