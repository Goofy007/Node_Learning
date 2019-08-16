// 1,引入核心模块--文件系统模块
let fs = require('fs');

// 2.同步读取  (必须得到一个结果 结果得到前不会执行后续操作)
// let fd = fs.readFileSync(__dirname+'/resource/a.txt');
// console.log(fd.toString())

//3。异步读取
fs.readFile(__dirname + '/resource/a.txt',(err,data) => {
    
});
console.log("后续操作")