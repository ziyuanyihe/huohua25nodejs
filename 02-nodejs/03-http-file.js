const http = require('http');
const fs = require('fs');
// 创建服务器
let server = http.createServer((req, res) => {
    // console.log(req);
    // /index.html
    // 获取客户端请求url的信息
    // 假设http://localhost:3000/about.html
    //   /about.html
    console.log(req.url);
    // 设置相应消息message
    res.writeHead(200, 'success', {
        'Content-Type': 'text/html;charset=utf-8'
    });
    // /index.html
    // /news.html
    // /about.html

    if (req.url != '/favicon.ico') {
        let filePath = './files' + req.url;
        console.log(filePath);
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.write(data);
            }
            // 读完响应就结束
            res.end('endend');
        });
    }


});
// 监听端口号
server.listen(3000, () => {
    console.log('server is running:3000');
});