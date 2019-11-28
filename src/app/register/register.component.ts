import { Component, OnInit } from '@angular/core';
import { ServerModel } from '../models/ServerModel';
import { Router } from '@angular/router';
import { responseR } from '../models/ResponseRequest';
import { register } from '../services/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})




/**
*
* @author Anthony Scheeres
*
*/
export class RegisterComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }


  /**
  *
  * @author Anthony Scheeres
  *
  */
  registerUser(event) {
    event.preventDefault()
    const target = event.target

    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    const email = target.querySelector('#email').value
    register(username, password, email)
  }
}












