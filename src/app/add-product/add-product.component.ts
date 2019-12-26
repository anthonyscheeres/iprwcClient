import { Component, OnInit } from '@angular/core';
import { ServerModel } from '../models/ServerModel';
import { insertProduct } from '../services/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  async addProduct(event) {
    var target = event.target
    var name = target.querySelector('#name').value
    var price = target.querySelector('#price').value
    var description = target.querySelector('#description').value
    await insertProduct(name, price, description);
  }
}


