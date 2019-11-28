import { Component, OnInit } from '@angular/core';
import { ServerModel } from '../models/ServerModel';
import { sendHttpGetRequest } from '../services/http.component';

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


function loadProducts() {
  var host = ServerModel.host
  var port = ServerModel.port
  var url = "http://" + host + ":" + port + "/product/show";






  sendHttpGetRequest(url).then(response => {
    console.log("response : " + response);
    return response;

  });
} 
