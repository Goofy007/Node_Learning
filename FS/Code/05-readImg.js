let fs= require('fs');
const path = require('path');
const dirPath = path.resolve(__dirname);
console.log("dir",dirPath)

// // 1. 读取图片
fs.readFile(dirPath+'/resource/a.jpg',(err,data) => {
    if(!err) {
        // console.log(data)
        // 写入图片文件
        fs.writeFile(__dirname+'/target/a.jpg',data, (err) => {
            if(err) {throw err}
            console.log("success")
        })
    }
})