import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../models/ProductModel';
import { ShoppingCartModel } from '../models/ShoppingCartModel';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  dataFromServer: ProductModel[] = ShoppingCartModel.products;

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  open() {

  }
}
