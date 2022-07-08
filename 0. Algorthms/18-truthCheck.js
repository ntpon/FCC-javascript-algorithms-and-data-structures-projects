function truthCheck(collection, pre) {
  let count = 0
  for (const item of collection) {
    if (item[pre]) {
      count++
    }
  }
  if (count === collection.length) return true
  return false
}
console.log(
  truthCheck(
    [
      {
        id: 1,
        data: { url: "https://freecodecamp.org", name: "freeCodeCamp" },
      },
      {
        id: 2,
        data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" },
      },
      { id: null, data: {} },
    ],
    "id"
  )
)
