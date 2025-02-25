// fs read and write
//for txt file


const fs = require("fs");

// fs.readFile("users.txt", (err, data) => {
//     if (err) {
//         throw err;
//     }

//     console.log(`users list: \n${data}`)
// })

// const data = fs.readFileSync("users.txt")

// console.log(data)
// console.log("test log")


////////////////////////////////////////////////////////
// for json file

// fs.readFile("data.json", (err, data) => {
//     if (err) {
//         throw err
//     }

//     console.log(JSON.parse(data)[0].title)
// })


////////////////////////////////////////////////////////
// write file 

// fs.writeFile("users.txt", "\nbabak", {flag: "a"}, (err) => {
//     if (err) {
//         throw err
//     }
//     console.log("new user added")
// })

const result = fs.writeFileSync("users.txt", "\nreza", {flag: "a"})
console.log(result)
console.log("test log")