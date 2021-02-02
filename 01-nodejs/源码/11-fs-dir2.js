let fs = require('fs');
// 创建文件夹创建文件,递归创建
// recursive: true:递归的创建
// fs.mkdir('./css/index.css', {
//     recursive: true
// }, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('目录创建成功');
//     }
// });
// 读取文件夹文件的类型
fs.readdir('./files', {
    withFileTypes: true
}, (err, files) => {
    if (err) {
        console.log(err);
    } else {
        console.log(files);
    }
});