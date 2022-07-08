function whatIsInAName(collection, source) {
  const arr = []
  collection.forEach((item) => {
    for (const key in source) {
      if (item[key] !== source[key]) return
    }
    arr.push(item)
  })
  return arr
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
)
