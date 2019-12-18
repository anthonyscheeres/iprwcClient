import { Component, OnInit } from '@angular/core';
import { changeImg } from '../services/product';
import { ProductModel } from '../models/ProductModel';

@Component({
  selector: 'app-change-product-img',
  templateUrl: './change-product-img.component.html',
  styleUrls: ['./change-product-img.component.css']
})
export class ChangeProductImgComponent implements OnInit {
  dataFromServer: any

  constructor() { }

  ngOnInit() {
  }
  changeImg(event, product: ProductModel) {
    var target = event.target
    var img = target.querySelector('#file-input').value
    var id;
    changeImg(img, product.id);
  }
}
