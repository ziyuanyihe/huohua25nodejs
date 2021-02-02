// 引入文件系统模块
let fs = require('fs');
// 返回值是读取的内容
// let data = fs.readFileSync('./files/3.txt', 'utf8');
// console.log(data);
// 捕获异常
try {
    let data = fs.readFileSync('./files/3.txt', 'utf8');
    console.log(data);
} catch (error) {
    console.log(error);
}