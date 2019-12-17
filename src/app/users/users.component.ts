import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ServerModel } from '../models/ServerModel';
import { Router } from '@angular/router';
import {getUsers, loadUsers, deleteUser, giveRead, giveWrite, giveDelete} from '../services/user';
import { HttpClient } from "@angular/common/http";
import {UserModel} from "../models/UserModel";
import { AccountModel } from '../models/AccountModel';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dataFromServer: any = loadUsers();
  static currentSelected: any = null;
  private selectedUser: UserModel;

  constructor(private _router: Router, private http: HttpClient) { }

  setSelected(user: UserModel) {
    this.selectedUser = user;

  }

  onDeleteUser() {
    deleteUser(this.selectedUser.username)
  }

  onGiveRead() {
    giveRead(this.selectedUser.username)

  }

  onGiveWrite() {
    giveWrite(this.selectedUser.username)
  
  }

  onGiveDelete() {
    giveDelete(this.selectedUser.username);
  }

  async ngOnInit() {
    AccountModel.token = localStorage.getItem("token")

    this.http.get<UserModel[]>(
      getUsers())
      .subscribe(
        responseData => {
          this.dataFromServer = responseData;
          console.log(responseData);
        }
      );
  }

}
