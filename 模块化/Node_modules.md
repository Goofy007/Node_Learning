## Node模块化

### ES6之前存在的问题

1. 没有模块系统
2. 官方标准库缺少标准接口缺少
3. 缺乏包管理系统

### 模块化

1. 程序设计达到一定规模 必须要有模块化

2. 模块化可以有多种形式，但都提供了能将代码分割为多个源文件的机制

3. CommonJs(Node) （examples-exports）

   1. exports 返回模块变量 函数

   2. module.exports 返回模块对象本身，返回的是一个类

   3. exports的方法可以直接调用 module.exports需要new对象后调用    

4. Node中通过require函数引入外部模块

5. 每一个js文件中的js代码都是独立运行在一个闭包中
(当node在执行模块中的代码时候，它会首先在代码的最顶部，添加如下代码
    function(exports,require,module,__filename,__dirname)
)

6. 暴露模块中的变量和函数

### 模块分类

1. 内建模块
2. 文件模块
3. 核心模块


### 包裹函数的内部参数
当node在执行模块中的代码时候，它会首先在代码的最顶部，添加如下代码 

```javascript

（function(exports,require,module,__filename,__dirname){
    exports = module.exports ={}
    // exports.outVar = 'out'
    // exports = {outVar: 'out'}
    return module.exports;
})

```

1. exports: 该对象用来将含糊内部的局部变量或局部函数暴露到外部
2. require: 用来引入外部的模块
3. module: 代表的是当前模块本身 exports就是module的属性
4. __filename: 当前模块的完整路径
5. __dirname: 当前模块所在文件夹的完整路径