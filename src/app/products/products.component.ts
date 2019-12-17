import { Component, OnInit } from '@angular/core';
import { ServerModel } from '../models/ServerModel';
import { loadProducts } from '../services/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  static currentlySelectedProduct;
  dataSource = loadProducts();
  constructor(private _router: Router) { }

  ngOnInit() {
  }

}


