// 内置模块
const fs = require('fs');
const { request } = require('http');
// 自定义模块
const until = require('./public/until.js');
console.log(until.firstName);
// 第三方模块
const md5 = require('md5');
const md5_node = require('md5-node');
// console.log(md5);
// console.log(md5(123));
// console.log(md5('123'));
// console.log(md5('momoko桃子'));
// console.log(md5_node('momoko桃子'));
// 格式化时间
const sillytime = require('silly-datetime');
console.log(sillytime.format(new Date(), 'YYYY-MM-DD HH:mm:ss'));
console.log(sillytime.format(new Date(), 'YYYY-MM-DD'));
console.log(sillytime.format(new Date(), 'HH:mm:ss'));
console.log(sillytime.format(new Date(), 'MM-DD'));
console.log(sillytime.format(new Date(), 'YYYY/MM/DD'));