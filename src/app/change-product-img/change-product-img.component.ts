import { Component, OnInit } from '@angular/core';
import { changeImg, urlProduct, deleteProductById } from '../services/product';
import { ProductModel } from '../models/ProductModel';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from "@angular/common/http";
import { ProductsModel } from '../models/ProductsModel';

@Component({
  selector: 'app-change-product-img',
  templateUrl: './change-product-img.component.html',
  styleUrls: ['./change-product-img.component.css']
})
export class ChangeProductImgComponent implements OnInit {
  dataFromServer: any = ProductsModel.products
  f: string;
  static currentSelected: any = null;
  selected: ProductModel;
  constructor(private _router: Router, private modalService: NgbModal, private http: HttpClient) { }

  async ngOnInit() {

    this.loadProducts()
  }

  loadProducts() {

    this.http.get<ProductModel[]>(
      urlProduct())
      .subscribe(
        responseData => {
          this.dataFromServer = responseData;
          ProductsModel.products = responseData
        })
  }


  setSelected(user: ProductModel) {
    this.selected = user;

  }

  fileChange(event, product: ProductModel) {
    var target = event.target
    let fileList: FileList = target.files;
    console.log(fileList)
    if (fileList.length > 0) {
      let file: File = fileList[0];
      var f = this.getBase64(file, product)

      this.loadProducts()
    }
   
  }

  getBase64(file, product) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    changeImg(reader.result, product.id);
  };
  reader.onerror = function (error) {
   // console.log('Error: ', error);
  };
}

  open(value) {
    deleteProductById(value);

    this.loadProducts()
  }

      
}


