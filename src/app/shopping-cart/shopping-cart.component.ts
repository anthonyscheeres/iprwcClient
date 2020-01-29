import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../models/ProductModel';
import { ShoppingCartModel } from '../models/ShoppingCartModel';
import { removeObjectFromCart, sumProductsInCart } from '../services/cart';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @Input() dataFromServer: ProductModel[] = ShoppingCartModel.products;
  static currentSelected: any = null;
 selected: ProductModel;
totalSum: number = this.sum()
  mySubscription: Subscription

  doStuff() {
    this.checkCurrentTotal();
  }
  constructor(private _router: Router) { }

  checkCurrentTotal() {
    this.totalSum = this.sum()
  }

  ngOnInit() {
    var time = 500
    this.mySubscription = interval(time).subscribe((x => {
      this.doStuff();
    }));
  }
  open(product) {
    removeObjectFromCart(product)
  }
  setSelected(product: ProductModel) {
    this.selected = product;
  }

  sum() {
    return sumProductsInCart()
  }


}
