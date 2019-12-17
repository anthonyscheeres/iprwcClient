import { Component, OnInit } from '@angular/core';
import { ServerModel } from '../models/ServerModel';
import { loadProducts, urlProduct } from '../services/product';
import { Router } from '@angular/router';
import { CreateExperimentComponent } from '../create-experiment/create-experiment.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountModel } from '../models/AccountModel';
import { getUsers } from '../services/user';
import { ProductModel } from '../models/ProductModel';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  static currentlySelectedProduct;
  dataFromServer: any = loadProducts()

  constructor(private _router: Router, private modalService: NgbModal, private http: HttpClient) { }

  async ngOnInit() {
    AccountModel.token = localStorage.getItem("token")
   
    
    
    this.http.get<ProductModel[]>(
      urlProduct())
      .subscribe(
        responseData => {
          this.dataFromServer = responseData;
          console.log(responseData);
        }
      )
  }
  open() {
   
  }
}


