let fs = require('fs');
let dataInfo = '不乱于心,不困于情,不畏将来,不念过往,如此安好\n';
// 创建一个写入流
// cWS: <fs.WriteStream> 
let cWS = fs.createWriteStream('./files/cw.txt');
// 写入
for (let i = 0; i < 10000; i++) {
    cWS.write(dataInfo);
}
// 写入结束
// cWS.end();
// 完成
// cWS.on('finish', () => {
//     console.log('写入文件完成');
// })