// 1. buffer 的三种创建方式
let buf1 = Buffer.alloc(20);
let buf2 = Buffer.alloc(20,1);
let buf3 = Buffer.allocUnsafe(); //不安全方式

let arr = [1,2,3]
let buf4 = Buffer.from(arr)

let buf5 = Buffer.from('Goofy')


// 常用方法
// fill 手动清除（初始化）
buf5.fill(0)

// write(string,offset,length,encoding)
buf5.write('ddf',0,3,'utf8')