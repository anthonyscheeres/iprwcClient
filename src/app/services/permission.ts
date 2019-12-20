import { fetchJsonPost, fetchPost } from './http';
import { ServerModel } from '../models/ServerModel';
import { AccountModel } from '../models/AccountModel';

export function hasDelete() {
  var host = ServerModel.host;
  var port = ServerModel.port;
  var token = AccountModel.token
  var url = "http://" + host + ":" + port + "/user/" + token + "/hasDelete";
  var data = null




  return fetchPost(url);
}

export function hasWrite() {
  var host = ServerModel.host;
  var port = ServerModel.port;
  var token = AccountModel.token
  var url = "http://" + host + ":" + port + "/user/" + token + "/hasWrite";






  return fetchPost(url);
}

export function hasRead() {
  var host = ServerModel.host;
  var port = ServerModel.port;
  var token = AccountModel.token
  var url = "http://" + host + ":" + port + "/user/"+ token+"/hasRead";




  return fetchPost(url);
}

export async function setHasRead() {
  var variable = "hasRead"
  await hasRead().then(response => {
    localStorage.setItem(variable, response)
    if (response.toLocaleLowerCase() === "true") {
      AccountModel.hasRead = true
    }
  })
}

export async function setHasWrite() {
  var variable = "hasWrite"
  await hasWrite().then(response => {
    localStorage.setItem(variable, response)
    if (response.toLocaleLowerCase() === "true") {
      AccountModel.hasWrite = true
    }
  })
}
export async function setHasDelete() {
  var variable = "hasDelete"
  await hasDelete().then(response => {
    localStorage.setItem(variable, response)
    if (response.toLocaleLowerCase() === "true") {
      AccountModel.hasDelete = true
      }
  })

  

}

export function logOut() {
  nullToken()
  nullHasWrite()
  nullHasDelete()
  nullHasRead()
}

export function nullHasSuperPermission() {
  AccountModel.hasSuperPermission = null

  localStorage.setItem("hasSuperPermission", null)
}

export function nullToken() {
  AccountModel.token = null

  localStorage.setItem("token", null)
}



export function nullHasWrite() {
  AccountModel.hasWrite = null

  localStorage.setItem("hasWrite", null)
}

export function nullHasDelete() {
  AccountModel.hasDelete = null

  localStorage.setItem("hasDelete", null)
}

export function nullHasRead() {
  AccountModel.hasRead = null

  localStorage.setItem("hasRead", null)
}




export async function setHasWhatPermission() {
  setHasWrite()
  setHasDelete()
  setHasRead()
}

export function hasSuperPermission() {
  var result = AccountModel.hasDelete && AccountModel.hasRead && AccountModel.hasWrite
  AccountModel.hasSuperPermission = result;
  localStorage.setItem("hasSuperPermission", result.toString())
  return result
}

