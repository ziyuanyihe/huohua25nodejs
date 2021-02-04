const http = require('http');
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
    switch (req.url) {
        case '/':
            res.write('home page赵芬的主页');
            break;
        case '/index.html':
            res.write('home page');
            break;
        case '/news.html':
            res.write('news page');
            break;
        case '/about.html':
            res.write('aboutus page');
            break;
        default:
            res.write('404 Not Fond');
    }
    // 响应结束
    res.end('ok呀');
});
// 监听端口号
server.listen(3000, () => {
    console.log('server is running:3000');
});