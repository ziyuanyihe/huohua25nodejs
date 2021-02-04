const http = require('http');
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
        // if (reqURL.indexOf('?') != -1) {
        if (reqURL.includes('?')) {
            //['uname=zhangmeili','password=666'];
            var arr = reqURL.split('?')[1].split('&');
            console.log(arr);
            // 存到对象中
            arr.forEach((value) => {
                var tempArr = value.split('=');
                obj[tempArr[0]] = tempArr[1];
            });
            console.log(obj);
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