import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ServerModel } from '../models/ServerModel';
import { Router } from '@angular/router';
import {getUsers, loadUsers, deleteUser, giveRead, giveWrite, giveDelete} from '../services/user';
import { HttpClient } from "@angular/common/http";
import {UserModel} from "../models/UserModel";
import { DataModel } from '../models/DataModel';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  hasSuper: boolean = !DataModel.account.hasSuperPermission;
  dataFromServer: any;
  static currentSelected: any = null;
   selectedUser: UserModel;

  constructor(private _router: Router, private http: HttpClient) { }

  setSelected(user: UserModel) {
    this.selectedUser = user;

  }


  fecthuser() {
    this.http.get<UserModel[]>(
      getUsers())
      .subscribe(
        responseData => {
          this.dataFromServer = responseData;
         
        }
      );
  }


  onDeleteUser() {
    deleteUser(this.selectedUser.username)
    this.fecthuser() 
  }

  onGiveRead() {
    giveRead(this.selectedUser.username)
    this.fecthuser() 
  }

  onGiveWrite() {
    giveWrite(this.selectedUser.username)
    this.fecthuser() 
  }

  onGiveDelete() {
    giveDelete(this.selectedUser.username);
    this.fecthuser() 
  }

  async ngOnInit() {
    

    this.fecthuser() 
  }

}
