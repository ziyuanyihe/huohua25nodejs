// fs:file system
// 读取文件
// 写入文件
// 追加内容
// 删除文件
// 重命名文件......
// require:引入模块
let fs = require('fs');
// console.log(fs);
// 读取文件:fs.readFile()
// ./同级
// ../上级
// fs.readFile('./files/1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
// 该类用来创建一个专门存放二进制数据的缓存区。
//         // Buffer:是一种数据暂时暂时存储区,用来临时存储一些数据(二进制数据)
//         console.log(data.toString());
//     }
// });
// fs.readFile('./files/1.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
// 写入文件
// fs.writeFile('./files/2.txt', 'Lily is a girl', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('写入成功');
//     }
// });
// 追加数据
fs.appendFile('./files/2.txt', 'momoko is good teacher', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('追加成功');
    }
});
// 异步操作:非阻塞操作

// // 删除文件
// fs.unlink('./files/del.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('删除成功');
//     }
// });
// 重命名文件
fs.rename('./files/rename.txt', './files/name.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('重命名成功');
    }
});