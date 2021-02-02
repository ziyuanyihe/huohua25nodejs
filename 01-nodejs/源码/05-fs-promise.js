let fs = require('fs');
// 1.先读取文件再重命名
// fs.readFile('./files/1.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
// fs.rename('./files/rename.txt', './files/name.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('重命名成功');
//     }
// });
// 读取文件
let read = function(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
// 重命名文件
let rename = function(oldFile, newFile) {
    return new Promise((resolve, reject) => {
        fs.rename(oldFile, newFile, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('重命名成功');
            }
        });
    });
};
// 控制执行顺序--先度1.txt, 再读2.txt, 然后再重命名rename.txt文件
read('./files/1.txt').then((data) => {
    console.log(data);
    return read('./files/2.txt');
}).then((data) => {
    console.log(data);
    return rename('./files/rename.txt', './files/name.txt');
}).then((data) => {
    console.log(data);
});