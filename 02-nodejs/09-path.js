let path = require('path');
// console.log(path);
// basename:path最后一部分文件名
//index.html
console.log(path.basename('http://www.hg-zn.com:3000/index.html'));
console.log(path.basename('http://www.hg-zn.com:3000/index.html', '.html'));
//login?uname=zhangmeili
console.log(path.basename('http://www.hg-zn.com:3000/login?uname=zhangmeili', '.html'));

// path 的目录名
// http://www.hg-zn.com:3000
console.log(path.dirname('http://www.hg-zn.com:3000/index.html'));
// http://www.hg-zn.com:3000/public/module/css 目录
console.log(path.dirname('http://www.hg-zn.com:3000/public/module/css/index.html'));
// url的扩展名
console.log(path.extname('http://www.hg-zn.com:3000/public/module/css/index.html'));
// 转换为对象
// {
//     root: '',
//     dir: 'http://localhost:3000',
// basename
//     base: 'login?uname=zhangmeili&password=666',
// extname
//     ext: '',
// 文件名
//     name: 'login?uname=zhangmeili&password=666'
//   }
console.log(path.parse('http://www.hg-zn.com:3000/index.html'));
console.log(path.parse('http://localhost:3000/login?uname=zhangmeili&password=666'));
// public\module\css
console.log(path.join('public', 'module', 'css'));