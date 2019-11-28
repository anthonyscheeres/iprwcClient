import { Component, OnInit } from '@angular/core';
import { ServerModel } from '../models/ServerModel';
import { Router } from "@angular/router";
import { responseR } from '../models/ResponseRequest';
import { AccountModel } from '../models/AccountModel';
import { login } from '../services/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


/**
*
* @author Anthony Scheeres
*
*/
export class LoginComponent implements OnInit {


  constructor(private _router: Router) { }



  

  ngOnInit() {
  }




  /**
  *
  * @author Anthony Scheeres
  *
  */
  loginUser(event) {
    event.preventDefault()
    const target = event.target

    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    login(username, password)

  };


}

