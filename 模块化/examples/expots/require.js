//  引入模块A
let fn1 = require('./moduleA.js')

let fnA = fn1;
console.log(fnA)
fnA.log()

// 引入muduleB模块 module.exports
let fn2 = require('./moduleB.js')

let fnB = new fn2()

console.log(fnB)
fnB.log()