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

    if (response.toLocaleLowerCase() === "true") {

      localStorage.setItem(variable, response);
      return AccountModel.hasRead = true;
    }

    localStorage.setItem(variable, "false");
    AccountModel.hasRead = false;
  })
}

export async function setHasWrite() {
  var variable = "hasWrite"
  await hasWrite().then(response => {

    if (response.toLocaleLowerCase() === "true") {

      localStorage.setItem(variable, response)
      return AccountModel.hasWrite = true
    }

    localStorage.setItem(variable, "false")
    AccountModel.hasWrite = false
  })
}
export async function setHasDelete() {
  var variable = "hasDelete"
  await hasDelete().then(response => {

    if (response.toLocaleLowerCase() === "true") {

      localStorage.setItem(variable, response)
      return AccountModel.hasDelete = true
    }

    localStorage.setItem(variable, "false")
    AccountModel.hasDelete = false
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
  var result = false;
  var delet = AccountModel.hasDelete;
  var read = AccountModel.hasRead;
  var write = AccountModel.hasWrite;

  console.log(delet)
  console.log(read)
  console.log(write)
  var result = delet && read && write
  var val;
  console.log("hasSuperPermission" +result)

  if (val == null || val === false) {
    localStorage.setItem("hasSuperPermission", "false")
    AccountModel.hasSuperPermission = false;
  }

  if (!result) {

  }
  localStorage.setItem("hasSuperPermission", result.toString())
  AccountModel.hasSuperPermission = result;
  return result
}

