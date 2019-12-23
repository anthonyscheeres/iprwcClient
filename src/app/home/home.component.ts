import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { hasSuperPermission } from '../services/permission';
import { ProductsModel } from '../models/ProductsModel';
import { ProductModel } from '../models/ProductModel';
import { urlProduct } from '../services/product';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router, private http: HttpClient) { }

  ngOnInit() {
    hasSuperPermission()


    this.http.get<ProductModel[]>(
      urlProduct())
      .subscribe(
        responseData => {
         // this.dataFromServer = responseData;
          ProductsModel.products = responseData;
          console.log(responseData);
        }
      )
  }

}
