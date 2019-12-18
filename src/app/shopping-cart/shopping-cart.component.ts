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
  static currentSelected: any = null;
  private selected: ProductModel;
  totalSum: number = this.sum() 
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  open(values) {
    var products: ProductModel[] = ShoppingCartModel.products
   
  }
  setSelected(product: ProductModel) {
    this.selected = product;

  }

  sum() {
    var products: ProductModel[] = ShoppingCartModel.products
    var total= 0
    products.forEach(product => {
      total = total + product.price
    })
    return total;
  }


}
