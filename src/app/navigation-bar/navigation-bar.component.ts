import { Component, OnInit } from '@angular/core';
import { AccountModel } from '../models/AccountModel';
import { Router } from '@angular/router';
import { DragContainer } from '../models/DragContainer';
import { ShoppingCartModel } from '../models/ShoppingCartModel';
import { hasSuperPermission, logOut } from '../services/permission';
import { IsSuperUserObserverable } from '../models/isSuperUserObserverable';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  condition1 = false

  constructor(private _router: Router) { }

  ngOnInit() {
     IsSuperUserObserverable.isAuthenticatedObs
      
/*      .subscribe(
        value => {
          this.condition1 = value;
        });*/
  }
  logOut() {
    logOut()
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
