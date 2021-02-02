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
// 申明一个generator函数
function* readfi() {
    yield read('./files/1.txt');
    yield read('./files/2.txt');
    yield rename('./files/rename.txt', './files/name.txt');
};
// 调用
// 按照此方法来接受结果
var relf = readfi();
// 不要重新调用这个函数
// console.log(relf.next().value);

// 执行
relf.next().value.then(data => {
    console.log(data);
    return relf.next().value;
}).then(data => {
    console.log(data);
    return relf.next().value;
}).then(data => {
    console.log(data);
});