
import { ServerModel } from '../models/ServerModel';
import { AccountModel } from '../models/AccountModel';
import { fetchJsonGet, fetchJsonPost } from './http';

export function loadProducts() {
  var host = ServerModel.host;
  var port = ServerModel.port;
  var url = "http://" + host + ":" + port + "/product/show";






  return fetchJsonGet(url);
}




export function insertProduct(name, price) {
  var host = ServerModel.host;
  var port = ServerModel.port;
  var token = AccountModel.token;
  var url = "http://" + host + ":" + port + "/product/"+ token + "create";
  var json = JSON.stringify({
    "name": name,
    "price": price
  });



  return fetchJsonPost(url, json);
}
