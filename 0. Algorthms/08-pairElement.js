function pairElement(str) {
  const pairs = {
    A: ["A", "T"],
    T: ["T", "A"],
    C: ["C", "G"],
    G: ["G", "C"],
  }

  return Array.from(str).map((item) => {
    return pairs[item]
  })
}

pairElement("GCG")
