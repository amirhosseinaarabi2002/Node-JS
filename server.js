console.log("first");
console.log(globalThis);
console.log(global.crypto.randomUUID());
console.log(crypto.randomUUID());

////////////////////////////////////////////////////

// common js

const { isLogin, num } = require("./funcs/funcs");

console.log(isLogin("login"));
console.log(num);

////////////////////////////////////////////////////
//export default function
const funcs = require("./funcs/funcs");

console.log(funcs)
console.log(funcs.isLogin("admin"));

////////////////////////////////////////////////////
// we have 3 types of madules 
// core madule like fs , local madule like funcs , and third party madule like express

