// 引入内置模块
const fs = require('fs');
// 读取文件
console.log(__dirname);
// 读取文件用绝对路径更好,更保险
fs.readFile(__dirname + '/files/1.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});
console.log('你好呀');