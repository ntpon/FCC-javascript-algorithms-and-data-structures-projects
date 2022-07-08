function fearNotLetter(str) {
  let beforeCode = str[0].charCodeAt()
  for (let i = 1; i < str.length; i++) {
    const currentCode = str[i].charCodeAt()
    if (currentCode - beforeCode != 1) {
      return String.fromCharCode(currentCode - 1)
    }
    beforeCode = currentCode
  }
  return undefined
}

console.log(fearNotLetter("abce"))
