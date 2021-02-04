// 引入查询字符串的模块
const queryStr = require('querystring');
// querystring.decode()
// querystring.parse(str[, sep[, eq[, options]]])
// querystring.encode()
// querystring.stringify(obj[, sep[, eq[, options]]])
// querystring.escape(str)
// querystring.unescape(str)

// let searchstr = 'uname=zhangmeili&password=666'
//     // [Object: null prototype] { uname: 'zhangmeili', password: '666' }
//     // 将字符串转换为对象
// console.log(queryStr.parse(searchstr));
// // uname=zhangmeili&password=666
// console.log(queryStr.stringify({ uname: 'zhangmeili', password: '666' }));
// // uname-zhangmeili*password-666
// console.log(queryStr.stringify({ uname: 'zhangmeili', password: '666' }, '*', '-'));

// // 编码和解码
// //node%E5%AD%A6%E4%B9%A0666
// console.log(queryStr.escape('node学习666'));
// console.log(queryStr.unescape('node%E5%AD%A6%E4%B9%A0666'));
let codeStr = 'uname=%E5%BC%A0%E7%BE%8E%E4%B8%BD&pwd=666';
console.log(queryStr.parse(codeStr));
console.log(queryStr.unescape('%E5%BC%A0%E7%BE%8E%E4%B8%BD'));