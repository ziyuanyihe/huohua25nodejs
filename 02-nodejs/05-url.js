let url = new URL('http://www.hg-zn.com:3000/login?uname=zhangmeili&password=666#888888');

// console.log(url);
// 锚位置#
// console.log(url.hash);
// 主机名加端口号
// 'www.hg-zn.com:3000
// console.log(url.host);
// // 主机名
// console.log(url.hostname);
// // 完整的url
// console.log(url.href);
// // 域
// // 'http://www.hg-zn.com:3000
// console.log(url.origin);
// // /login
// console.log(url.pathname);
// // 端口号
// console.log(url.port);
// // 协议
// console.log(url.protocol);
// // '?uname=zhangmeili&passord=666'
// console.log(url.search);
// // URLSearchParams { 'uname' => 'zhangmeili', 'password' => '666' },
// console.log(url.searchParams);
// console.log(url.toString());
// console.log(url.toJSON());
// 声明请求url参数
let searchpar = url.searchParams;
console.log(searchpar);
// 结构
for (let [key, value] of searchpar) {
    console.log(key);
    console.log(value);
};
// forEach遍历
searchpar.forEach((value, key) => {
    console.log(key);
    console.log(value);

});
// searchpar.append('gender', '女');
// searchpar.delete('password');
// console.log(searchpar);
// console.log(searchpar.entries());
// console.log(searchpar.get('gender'));
// console.log(searchpar.getAll('gender'));
// console.log(searchpar.has('uname'));
// console.log(searchpar.keys());
searchpar.append('key', '111');
searchpar.append('key', '222');
searchpar.append('key', '333');
console.log(searchpar);
console.log(searchpar.get('key'));
console.log(searchpar.getAll('key'));