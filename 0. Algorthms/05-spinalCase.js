function spinalCase(str) {
  str = str.replace(/ /g, "-")
  str = str.replace(/_/g, "-")
  str = str.replace(/[A-Z]/g, (match, offset, string) => {
    if (offset !== 0) {
      if (string[offset - 1] !== "-") {
        return "-" + match.toLowerCase()
      }
    }
    return match.toLowerCase()
  })
  return str
}
console.log(spinalCase("AllThe-small Things"))
