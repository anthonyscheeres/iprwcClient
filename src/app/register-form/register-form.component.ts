import { Component, OnInit } from '@angular/core';
import { register } from '../services/user';
import { responseR } from '../models/ResponseRequest';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  myRecaptcha: boolean = false;

  onScriptLoad() {
    console.log('Google reCAPTCHA loaded and is ready for use!')
  }

  onScriptError() {
    this.myRecaptcha = true
  }
  constructor(private _router: Router) { }
s
  ngOnInit() {
  }



  async registerUser(event) {

    event.preventDefault()
    if (this.myRecaptcha) {

      const target = event.target

      const username = target.querySelector('#username').value
      const password = target.querySelector('#password').value
      const email = target.querySelector('#email').value
      await register(username, password, email).then(response => {

        if (response != responseR.fail) {
          this._router.navigate(['/login']);

        }
      })
    };


  }

}
