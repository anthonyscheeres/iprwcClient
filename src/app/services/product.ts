
import { ServerModel } from '../models/ServerModel';
import { fetchJsonGet, fetchJsonPost } from './http';
import { ProtocolR } from '../models/Protocol';
import { ProductModel } from '../models/ProductModel';
import { DataModel } from '../models/DataModel';
import { ShoppingCartModel } from '../models/ShoppingCartModel';


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


export function addProduct(value: ProductModel) {

    ShoppingCartModel.products.push(value)
  

}

export function deleteProductById(product: ProductModel ) {
  var host = ServerModel.host;
  var port = ServerModel.port;
  var token = DataModel.account.token
  var urlToServer = "http://" + host + ":" + port + "/product/" + token + "/remove";
  var id = product.id;
  var data = JSON.stringify({
    "id": id
  });


  return fetchJsonPost(urlToServer, data.toString(), ProtocolR.DELETE)
}



export function insertProduct(name, price, description) {
  var host = ServerModel.host;
  var port = ServerModel.port;
  var token = DataModel.account.token;
  var url = "http://" + host + ":" + port + "/product/"+ token + "/create";
  var json = JSON.stringify({
    "name_p": name,
    "price": price,
    "description": description
  });






  return fetchJsonPost(url, json, ProtocolR.POST);
}

export function changeImg(img, id) {
  var host = ServerModel.host;
  var port = ServerModel.port;
  var token = DataModel.account.token;
  var url = "http://" + host + ":" + port + "/product/" + token + "/changeImg ";
  var json = JSON.stringify({
    "id": id,
    "img": img
  });

  console.log(json)




  return fetchJsonPost(url, json, ProtocolR.POST);
}

