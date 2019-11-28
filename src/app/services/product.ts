import { sendHttpGetRequest } from './http';
import { ServerModel } from '../models/ServerModel';

export function loadProducts() {
  var host = ServerModel.host
  var port = ServerModel.port
  var url = "http://" + host + ":" + port + "/product/show";






  sendHttpGetRequest(url).then(response => {
    console.log("response : " + response);
    return response;

  });
}


export function insertProduct(name, price) {
  var data = JSON.stringify({
    "name": name,
    "price" :price
  })
}
