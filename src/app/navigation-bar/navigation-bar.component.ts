import { Component, OnInit } from '@angular/core';
import { AccountModel } from '../models/AccountModel';
import { Router } from '@angular/router';
import { DragContainer } from '../models/DragContainer';
import { ShoppingCartModel } from '../models/ShoppingCartModel';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  logOut() {
    AccountModel.token = null
  
    localStorage.setItem("token", null)
    this._router.navigate(['/']);
  }
  allowDrop(ev) {
    ev.preventDefault();
  }

 

  drop(ev) {
    ev.preventDefault();

    var value = DragContainer.product
    
    ShoppingCartModel.products.push(value)
  }
}
