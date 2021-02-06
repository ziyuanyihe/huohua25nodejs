// 根据用户的url的参数的存储到json文件中
const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
// 引入自定义模块
const writejson = require('./writejson/funjson.js');
let server = http.createServer((req, res) => {
    // 设置响应头
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    // http://localhost:3000/login?uname=张美丽&password=666
    // req.url:/login?uname=张美丽&password=666
    // /favicon.ico
    if (req.url != '/favicon.ico') {
        //uname=张美丽&password=666
        var reqstr = req.url.split('?')[1];
        // 转换为对象
        var tempObj = queryString.parse(reqstr);
        // 自定义模块来做写入json的操作
        writejson.setData(fs, tempObj, (data) => {
            res.write(data + '写入成功');
            // 结束监听
            res.end();
        });

    } else {
        res.write('404');
        // 结束监听
        res.end();
    };
});
// 设置监听端口
server.listen(3000, () => {
    console.log('server is running:3000');
});