
export function getHasReadFromCookie() {
  var boolean = localStorage.getItem("hasRead")
  
  if (boolean = "true") {
    return true
  }
  console.log(boolean)
  return false
}

export function getHasWriteFromCookie() {
  var boolean = localStorage.getItem("hasWrite")
 
  if (boolean="true") {
    return true
  }
  console.log(boolean)
  return false
}

export function getHasDeleteFromCookie() {
  var boolean = localStorage.getItem("hasDelete")
  
  if (boolean = "true") {
    return true
  }
  console.log(boolean)
  return false
}
