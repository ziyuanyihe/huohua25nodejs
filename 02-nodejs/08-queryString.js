const http = require('http');
const queryStr = require('querystring');
let server = http.createServer((req, res) => {
    // 设置响应头
    res.writeHead(200, {
        'Content-type': 'text/html;charset=utf-8'
    });
    // 获取请求的url相关内容
    // http://localhost:3000/login?uname=zhangmeili&password=666
    // /login?uname=zhangmeili&password=666
    console.log(req.url);
    // 转存成对象
    // {
    //     uname: 'zhangmeili',
    //     password: 666
    // }
    let reqURL = req.url;
    if (reqURL != '/favicon.ico') {
        // 申明转存的obj对象
        let obj = {};
        if (reqURL.includes('?')) {
            // 'uname=zhangmeili&password=666'
            var reqstr = reqURL.split('?')[1];
            console.log(reqstr);
            // 转换为对象
            console.log(queryStr.parse(reqstr));
            // 结束
            res.end('提交成功');
        } else {
            res.end('无参数存储');
        }
    };
});
// 开启端口的监听
server.listen(3000, () => {
    console.log('server is running:3000');
});