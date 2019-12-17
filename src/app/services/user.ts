
import { ServerModel } from '../models/ServerModel';
import { responseR } from '../models/ResponseRequest';
import { AccountModel } from '../models/AccountModel';
import { fetchJsonPost, fetchJsonGet } from './http';
import { UserModel } from '../models/UserModel';


var host = ServerModel.host;
var port = ServerModel.port;
var token = AccountModel.token

export function loadUsers() {

  var token = AccountModel.token;
  var url = "http://" + host + ":" + port + "/user/show";
  return url
}



export function login(username, password) {
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

  var urlToServer = "http://" + host + ":" + port + "/user/createUser";

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

  var url = "http://" + host + ":" + port + "/user/" + token + "/showAllUsers";


  return url;
}



export function deleteUser(user: UserModel) {

  var urlToServer = "http://" + host + ":" + port + "/user/" + token + "/remove";

 var username = UserModel.username
  var data = JSON.stringify({
    "username": username,
    "password": null,
    "id": null,
    "permission": null,
    "email": null
  });


  return fetchJsonPost(urlToServer, data.toString())
}

export function giveRead(user: UserModel) {

  var urlToServer = "http://" + host + ":" + port + "/user/" + token + "/read";

  var username = UserModel.username
  var data = JSON.stringify({
    "username": username,
    "password": null,
    "id": null,
    "permission": null,
    "email": null
  });


  return fetchJsonPost(urlToServer, data.toString())
}

export function giveWrite(user: UserModel) {

  var urlToServer = "http://" + host + ":" + port + "/user/" + token + "/write";

  var username = UserModel.username
  var data = JSON.stringify({
    "username": username,
    "password": null,
    "id": null,
    "permission": null,
    "email": null
  });


  return fetchJsonPost(urlToServer, data.toString())
}

export function giveDelete(user: UserModel) {

  var urlToServer = "http://" + host + ":" + port + "/user/"+token +"/delete";

  var username = UserModel.username
  var data = JSON.stringify({
    "username": username,
    "password": null,
    "id": null,
    "permission": null,
    "email": null
  });


  return fetchJsonPost(urlToServer, data.toString())
}
