
export function getHasReadFromCookie() {
  var boolean = localStorage.getItem("hasRead")
  console.log(boolean)
  if (boolean = "true") {
    return true
  }

  return false
}

export function getHasWriteFromCookie() {
  var boolean = localStorage.getItem("hasWrite")
  console.log(boolean)
  if (boolean="true") {
    return true
  }

  return false
}

export function getHasDeleteFromCookie() {
  var boolean = localStorage.getItem("hasDelete")
  console.log(boolean)
  if (boolean = "true") {
    return true
  }

  return false
}
