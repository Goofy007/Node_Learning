### 什么是Buffer
1. 缓冲区Buffer是暂时存放输入/输出数据的一段内存
2. JS语言没有二进制数据类型，然而在处理TCP和文件流的时候，，必须要处理二进制数据
3. NODEJS提供了一个Buffer对象来提供对二进制数据的操作
4. Buffer是一个表示固定内存分配的全局对象，也就是说要放到缓存区中的字节数需要提前确定
5. Buffer就好比由一个8位字节元素组成的数组们可以有效的在js中表示二进制数据

### 什么是字节
1. 字节（Byte）是计算机存储时的一种计量单位，一个字节等于8位二进制数
2. 一个位就代表0或1，每8个bit组成一个字节Byte
3. 字节是通过网络传输信息的单位
4. 一个字节最大值十进制数是255

### 三种创建方式 （code/fs/01-buffer）

```
let buf1 = Buffer.alloc(20);
let buf2 = Buffer.alloc(20,1);
let buf3 = Buffer.allocUnsafe(); //不安全方式

let arr = [1,2,3]
let buf4 = Buffer.from(arr)

```

### Buffer的常用方法
1. buf.filll
2. write
3. writeInt8()
4. isBuffer
5. length