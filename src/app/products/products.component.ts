import { Component, OnInit } from '@angular/core';
import { ServerModel } from '../models/ServerModel';
import { loadProducts } from '../services/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  dataSource = loadProducts();
  constructor() { }

  ngOnInit() {
  }

}


