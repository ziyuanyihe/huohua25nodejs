let fs = require('fs');
const { callbackify } = require('util');
// stat(path,callback):判定是文件还是目录
// callback(err, stats):
// stats.isDirectory()
// stats.isFile()
// fs.stat('./files/1.txt', (err, stats) => {
//     if (err) {
//         console.log(err);
//     } else {
//         if (stats.isDirectory()) {
//             console.log('是一个目录');
//         } else if (stats.isFile()) {
//             console.log('是一个文件');
//         }
//     };
// });

// 创建文件夹
// fs.mkdir('./files/css', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('目录创建成功');
//     }
// });
// 删除文件夹
// fs.rmdir('./files/css', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('目录删除成功');
//     }
// });
// 如何删除一个不是空的文件夹
// fs.rmdir('./files', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('目录删除成功');
//     }
// });
// 读取文件夹
fs.readdir('./files', (err, files) => {
    if (err) {
        console.log(err);
    } else {
        // files是一个数组---所有文件的文件名[ '1.txt', '2.txt', 'name.txt' ]
        console.log(files);
        console.log(files[2]);
    }
});