let fs = require('fs')

// 1.打开文件
let fd = fs.openSync(__dirname+'/resource/b.txt','w');
console.log(fd)

//2.同步写入
fs.writeFileSync(fd,'1234556')

// 3保存必哦那个切退出
fs.closeSync(fd)

//4 .后续操作
console.log('后续操作')