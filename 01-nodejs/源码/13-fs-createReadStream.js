let fs = require('fs');
let cRW = fs.createReadStream('./files/cw.txt');
// 保存读取的数据
let str = '';
// 记录读取的次数
var flag = 0;
// data:用于读取数据
cRW.on('data', (dataStr) => {
    str += dataStr;
    flag++;
});
// 当读取流去取完成时,在回调函数中,打印出读取到的数据
cRW.on('end', () => {
    console.log(str);
    console.log(flag);

});

cRW.on('error', (error) => {
    console.log(error);
});