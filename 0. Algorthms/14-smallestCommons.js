function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b)
  const numDiv = max - min + 1
  // จำนวนที่เป็นไปได้
  let numBound = 1
  for (let i = min; i <= max; i++) {
    numBound *= i
  }

  //   ตรวจตัวที่หารลงตัว
  for (let num = max; num <= numBound; num += max) {
    let numDivCurrent = 0
    for (let i = min; i <= max; i++) {
      if (num % i === 0) {
        // console.log(num)
        // console.log(i)
        numDivCurrent++
      }
    }
    if (numDivCurrent === numDiv) {
      return num
    }
  }

  return null
}

smallestCommons([1, 5])
