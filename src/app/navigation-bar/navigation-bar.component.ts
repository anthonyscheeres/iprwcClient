import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DragContainer } from '../models/DragContainer';
import { ShoppingCartModel } from '../models/ShoppingCartModel';
import { hasSuperPermission, logOut } from '../services/permission';
import { Subscription, interval } from 'rxjs';
import { DataModel } from '../models/DataModel';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  condition1 = DataModel.account.token != null && DataModel.account.token != "";
  productCount: number = ShoppingCartModel.products.length
  show: boolean = true;
  value

  toggleCollapse() {
    this.show = !this.show
  }

  myStyles = {
    'visibility': 'hidden'
  };

  mySubscription: Subscription

  doStuff() {
    this.checkCurrentPermission();
    this.myStyles = {
      'visibility': 'visible'

    }
    this.productCount = ShoppingCartModel.products.length
  }

  constructor(private _router: Router) {
    var time = 500
    this.mySubscription = interval(time).subscribe((x => {
      this.doStuff();
    }));
  }

  checkCurrentPermission() {
    this.condition1 = DataModel.account.token != null && DataModel.account.token !="";
  }


  ngOnInit() {
    
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
    
    ShoppingCartModel.products.push(value);
  }
}
