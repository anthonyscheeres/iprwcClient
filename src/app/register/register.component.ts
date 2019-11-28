import { Component, OnInit } from '@angular/core';
import { sendHttpPostRequest } from '../services/http.component';
import { ServerModel } from '../models/ServerModel';
import { Router } from '@angular/router';
import { responseR } from '../models/ResponseRequest';

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

    var host = ServerModel.host
    var port = ServerModel.port
    var urlToServer = "http://" + host + ":" + port + "/user/create";

    var data = JSON.stringify({
      "username": username,
      "password": password,
      "id": null,
      "permission": null,
      "email": email
    });


    sendHttpPostRequest(urlToServer, data.toString()).then(response => {
      console.log("response : " + response);
      if (response != responseR.fail) {
        this._router.navigate(['/login']);
      }

    });
  }
}












