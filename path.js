const path = require("path")

console.log(__filename)
console.log(__dirname)

console.log(path.basename(__filename))
console.log(path.basename(__dirname))

console.log(path.extname("C:\Users\amir\Documents\Node-JS\path.js"))
console.log(path.parse(__dirname))

console.log(path.normalize("C:\/Users\/amir\/Documents\/Node-JS\/path.js"))
console.log(path.join(__dirname, "/images"))