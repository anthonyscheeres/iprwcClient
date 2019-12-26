import { Component, OnInit, NgModule } from '@angular/core';
import { ServerModel } from '../models/ServerModel';
import { loadProducts, urlProduct, addProduct } from '../services/product';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { getUsers } from '../services/user';
import { ProductModel } from '../models/ProductModel';
import { HttpClient } from "@angular/common/http";
import { ShoppingCartModel } from '../models/ShoppingCartModel';
import { DragContainer } from '../models/DragContainer';
import { hasSuperPermission } from '../services/permission';
import { ProductsModel } from '../models/ProductsModel';
import { PopUpComponent } from '../pop-up/pop-up.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
 

})
export class ProductsComponent implements OnInit {
  static currentlySelectedProduct;
  dataFromServer: any = ProductsModel.products
  static currentSelected: any = null;
  private selected: ProductModel;


  constructor(private _router: Router, private modalService: NgbModal, private http: HttpClient) { }
  drag(ev, value) {
    DragContainer.product = value;
  }
  async ngOnInit() {
    hasSuperPermission()
    
    
    this.http.get<ProductModel[]>(
      urlProduct())
      .subscribe(
        responseData => {
          this.dataFromServer = responseData;
          ProductsModel.products = responseData;
          console.log(responseData);
        }
      )
  }

  click(value) {
    this.modalService.open(PopUpComponent)
  }


  open(value) {
    addProduct(value)
  }


  setSelected(product: ProductModel) {
    this.selected = product;

  }


}


