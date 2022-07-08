function orbitalPeriod(arr) {
  const GM = 398600.4418
  const earthRadius = 6367.4447
  const a = 2 * Math.PI
  return arr.map((item) => {
    const c = Math.pow(earthRadius + item.avgAlt, 3)
    const b = Math.sqrt(c / GM)
    const orbitalPeriod = Math.round(a * b)
    return {
      name: item.name,
      orbitalPeriod,
    }
  })
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]))
