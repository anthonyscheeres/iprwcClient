
import { ServerModel } from '../models/ServerModel';
import { responseR } from '../models/ResponseRequest';
import { AccountModel } from '../models/AccountModel';
import { fetchJsonPost, fetchJsonGet } from './http';
import { UserModel } from '../models/UserModel';




export function loadUsers() {
  var host = ServerModel.host;
  var port = ServerModel.port;
  var token = AccountModel.token;
  var url = "http://" + host + ":" + port + "/user/show";
  return url
}



export function login(username, password) {
  var host = ServerModel.host;
  var port = ServerModel.port;
  var token = AccountModel.token
  var url = "http://" + host + ":" + port + "/user/login";

  var data = JSON.stringify({
    "username": username,
    "password": password,
    "id": null,
    "permission": null,
    "email": null
  });




  return fetchJsonPost(url, data.toString());




}


export function register(username, password, email) {
  var host = ServerModel.host;
  var port = ServerModel.port;
  var token = AccountModel.token
  var urlToServer = "http://" + host + ":" + port + "/user/create";

  var data = JSON.stringify({
    "username": username,
    "password": password,
    "id": null,
    "permission": null,
    "email": email
  });


  return fetchJsonPost(urlToServer, data.toString())

}

export function getUsers() {
  var host = ServerModel.host;
  var port = ServerModel.port;
  var token = AccountModel.token
  var url = "http://" + host + ":" + port + "/user/" + token + "/showAllUsers";


  return url;
}



export function deleteUser(user) {
  var host = ServerModel.host;
  var port = ServerModel.port;
  var token = AccountModel.token
  var urlToServer = "http://" + host + ":" + port + "/user/" + token + "/remove";

  console.log("username:"+user)
  var data = JSON.stringify({
    "username": user,
    "password": null,
    "id": null,
    "permission": null,
    "email": null
  });


  return fetchJsonPost(urlToServer, data.toString())
}

export function giveRead(user) {
  var host = ServerModel.host;
  var port = ServerModel.port;
  var token = AccountModel.token
  var urlToServer = "http://" + host + ":" + port + "/user/" + token + "/read";

  var data = JSON.stringify({
    "username": user,
    "password": null,
    "id": null,
    "permission": null,
    "email": null
  });


  return fetchJsonPost(urlToServer, data.toString())
}

export function giveWrite(user) {
  var host = ServerModel.host;
  var port = ServerModel.port;
  var token = AccountModel.token
  var urlToServer = "http://" + host + ":" + port + "/user/" + token + "/write";

  var data = JSON.stringify({
    "username": user,
    "password": null,
    "id": null,
    "permission": null,
    "email": null
  });


  return fetchJsonPost(urlToServer, data.toString())
}

export function giveDelete(user) {
  var host = ServerModel.host;
  var port = ServerModel.port;
  var token = AccountModel.token
  var urlToServer = "http://" + host + ":" + port + "/user/"+token +"/delete";

  var data = JSON.stringify({
    "username": user,
    "password": null,
    "id": null,
    "permission": null,
    "email": null
  });


  return fetchJsonPost(urlToServer, data.toString())
}
