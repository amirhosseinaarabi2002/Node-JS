// console.log("first");
// console.log(globalThis);
// console.log(global.crypto.randomUUID());
// console.log(crypto.randomUUID());

////////////////////////////////////////////////////

// common js

// const { isLogin, num } = require("./funcs/funcs");

// console.log(isLogin("login"));
// console.log(num);

////////////////////////////////////////////////////
//export default function
// const funcs = require("./funcs/funcs");

// console.log(funcs)
// console.log(funcs.isLogin("admin"));

////////////////////////////////////////////////////
// we have 3 types of madules 
// core madule like fs , local madule like funcs , and third party madule like express

// const fs = require("fs");

// fs.rename("./books.json", "db.json", (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log("File Renamed Successfully ");
// });

// if (fs.existsSync("./db.json")) {
//   fs.rm("./db.json", (err) => {
//     if (err) {
//       throw err;
//     }

//     console.log("File Removed Successfully");
//   });
//   // fs.unlink("./db.json", (err) => {
//   //   if (err) {
//   //     throw err;
//   //   }

//   //   console.log("File Removed Successfully");
//   // });
// } else {
//   console.log("no such file or directory");
// }

// fs.appendFile("./users.txt", "ali \n", (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log("Data Append Successfully");
// });


const fs = require("fs");

// fs.mkdir("amin/photo/profile", { recursive: true }, (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log("Directory Created Successfully :))");
// });

// fs.rmdir("users", (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log("Directory Removed Successfully");
// });

fs.readdir("amin", (err, files) => {
  if (err) {
    throw err;
  }

  console.log(files.length);
});
