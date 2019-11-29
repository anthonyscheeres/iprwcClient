
import { ServerModel } from '../models/ServerModel';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { loadUsers } from '../services/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dataFromServer: any ;
 
  idSelectedVote = null;

  setSelected = function (idSelectedVote) {
    console.log(idSelectedVote)
    this.idSelectedVote = idSelectedVote;
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
      this.dataFromServer = JSON.parse(response);
     
    })
    console.log(this.dataFromServer);

  }
 

}

