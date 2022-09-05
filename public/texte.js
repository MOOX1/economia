const tex = "100.100.100,10"

const teste =tex.replace(/[.]/g, "" ).replace(/[,]{1}/g, ".")

console.log(teste)