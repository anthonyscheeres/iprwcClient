
import { ServerModel } from '../models/ServerModel';
import { AccountModel } from '../models/AccountModel';
import { fetchJsonGet, fetchJsonPost } from './http';
import { ProtocolR } from '../models/Protocol';
import { ProductModel } from '../models/ProductModel';


export function urlProduct() {
  var host = ServerModel.host;
  var port = ServerModel.port;
  var url = "http://" + host + ":" + port + "/product/show";
  return url;

}

export function loadProducts() {
  var url = urlProduct()
  return fetchJsonGet(url);
}

export function deleteProductById(product: ProductModel ) {
  var host = ServerModel.host;
  var port = ServerModel.port;
  var token = AccountModel.token
  var urlToServer = "http://" + host + ":" + port + "/product/" + token + "/remove";
  var id = product.id;
  var data = JSON.stringify({
    "id": id
  });


  return fetchJsonPost(urlToServer, data.toString(), ProtocolR.DELETE)
}



export function insertProduct(name, price) {
  var host = ServerModel.host;
  var port = ServerModel.port;
  var token = AccountModel.token;
  var url = "http://" + host + ":" + port + "/product/"+ token + "/create";
  var json = JSON.stringify({
    "name_p": name,
    "price": price
  });






  return fetchJsonPost(url, json, ProtocolR.POST);
}

export function changeImg(img, id) {
  var host = ServerModel.host;
  var port = ServerModel.port;
  var token = AccountModel.token;
  var url = "http://" + host + ":" + port + "/product/" + token + "/changeImg ";
  var json = JSON.stringify({
    "id": id,
    "img": img
  });

  console.log(json)




  return fetchJsonPost(url, json, ProtocolR.POST);
}

