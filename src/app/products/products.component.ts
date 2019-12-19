import { Component, OnInit, NgModule } from '@angular/core';
import { ServerModel } from '../models/ServerModel';
import { loadProducts, urlProduct } from '../services/product';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountModel } from '../models/AccountModel';
import { getUsers } from '../services/user';
import { ProductModel } from '../models/ProductModel';
import { HttpClient } from "@angular/common/http";
import { ShoppingCartModel } from '../models/ShoppingCartModel';
import { DragContainer } from '../models/DragContainer';
import { Decode64Pipe } from '../models/Base64Pipe';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
 

})
export class ProductsComponent implements OnInit {
  static currentlySelectedProduct;
  dataFromServer: any 
  static currentSelected: any = null;
  private selected: ProductModel;


  constructor(private _router: Router, private modalService: NgbModal, private http: HttpClient) { }
  drag(ev, value) {
    DragContainer.product = value;
  }
  async ngOnInit() {
   
    
    
    this.http.get<ProductModel[]>(
      urlProduct())
      .subscribe(
        responseData => {
          this.dataFromServer = responseData;
          console.log(responseData);
        }
      )
  }




  open(value) {
    ShoppingCartModel.products.push(value)
  }


  setSelected(product: ProductModel) {
    this.selected = product;

  }


}


