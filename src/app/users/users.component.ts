import { Component, OnInit, Injectable } from '@angular/core';
import { sendHttpGetRequest, fetchJsonGet,  } from '../services/http.component';
import { LoginComponent } from '../login/login.component';
import { ServerModel } from '../models/ServerModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dataFromServer: any ;
   currentSelected: Number = null;
  customHeaders: any = {
    thead: ['username', 'permission'], // the Column Name in table head.
    displayed: ['username', 'permission'] // the data it should populate in table.
  };



  constructor(private _router: Router) {
   
  }

  deleteByIdS(ids) {
    console.log(ids); // this function gives the ID of deleted rows.. as an array
  }

  updateChanges(row) {
    console.log(row); // This return the row which is updated with the id.
  }




  async ngOnInit() {
    await loadUsers().then(response => {
      this.dataFromServer = response
     
    })
    console.log(this.dataFromServer);

  }
 

}
async function loadUsers() {
  var host = ServerModel.host
  var port = ServerModel.port
  var url = "http://" + host + ":" + port + "/user/show";

  return fetchJsonGet(url)
 

} 
