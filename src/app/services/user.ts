import { fetchJsonGet, sendHttpPostRequest } from "./http";
import { ServerModel } from '../models/ServerModel';
import { responseR } from '../models/ResponseRequest';
import { AccountModel } from '../models/AccountModel';

export async function loadUsers() {
  var host = ServerModel.host
  var port = ServerModel.port
  var url = "http://" + host + ":" + port + "/user/show";

  return fetchJsonGet(url)


}



export function login(username, password) {
  var host = ServerModel.host
  var port = ServerModel.port
  var url = "http://" + host + ":" + port + "/user/login";

  var data = JSON.stringify({
    "username": username,
    "password": password,
    "id": null,
    "permission": null,
    "email": null
  });



  sendHttpPostRequest(url, data.toString()).then(response => {
    console.log("response : " + response);
    if (response != responseR.fail) {
      AccountModel.token = response

    }

  });


}


export function register(username, password , email ) {

  var host = ServerModel.host
  var port = ServerModel.port
  var urlToServer = "http://" + host + ":" + port + "/user/create";

  var data = JSON.stringify({
    "username": username,
    "password": password,
    "id": null,
    "permission": null,
    "email": email
  });


  sendHttpPostRequest(urlToServer, data.toString()).then(response => {
    console.log("response : " + response);
    if (response != responseR.fail) {
      this._router.navigate(['/login']);
    }

  });
}
