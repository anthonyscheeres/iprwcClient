import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../models/ProductModel';
import { DetailsProduct } from '../models/DetailsProduct';
import { addProduct } from '../services/product';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: ProductModel = DetailsProduct.product
  @Input() src;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  open(value: any) {
    addProduct(value)
  }
}
