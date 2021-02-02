let fs = require('fs');
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
// async 关键字标注function,通过await等待程序执行的结果
async function readf() {
    let file1 = await read('./files/1.txt');
    let file2 = await read('./files/2.txt');
    let file3 = await read('./files/name.txt');
    console.log(file1);
    console.log(file2);
    console.log(file3);
};
readf();