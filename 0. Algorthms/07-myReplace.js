function myReplace(str, before, after) {
  let replaceText = after
  if (/[A-Z]/.test(before[0])) {
    replaceText = after[0].toUpperCase() + after.slice(1)
  }
  if (/[a-z]/.test(before[0])) {
    replaceText = after[0].toLowerCase() + after.slice(1)
  }
  const re = RegExp("\\b" + before + "\\b", "g")
  return str.replace(re, replaceText)
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
