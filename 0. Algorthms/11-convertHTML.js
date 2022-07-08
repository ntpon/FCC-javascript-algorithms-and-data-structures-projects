function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  }
  return str.replace(/[&<>\"\']/g, (match, offset, text) => {
    return htmlEntities[match]
  })
}

convertHTML("Dolce & Gabbana")
