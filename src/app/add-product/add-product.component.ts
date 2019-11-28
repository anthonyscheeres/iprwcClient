import { Component, OnInit } from '@angular/core';
import { ServerModel } from '../models/ServerModel';
import { sendHttpGetRequest } from '../services/http.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
function addProduct() {
  var host = ServerModel.host
  var port = ServerModel.port
  var url = "http://" + host + ":" + port + "/product/create";






  sendHttpGetRequest(url).then(response => {
    console.log("response : " + response);
    return response;

  });
}
