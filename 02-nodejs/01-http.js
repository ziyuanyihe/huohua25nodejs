let http = require('http');
// console.log(http);
// 使用createServer()创建服务器
// request:请求
// response:返回消息等内容
let server = http.createServer((req, res) => {
    // 设置响应信息-相应类型及编码方式--不要乱码
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    });
    // 写入到前台
    res.write('你好呀,欢迎访问');
    res.write('<div>来来来,大家一起来</div>');
    // 响应结束
    res.end();
});
server.listen(3000, () => {
    console.log('Server is running,Press Ctrl + c will stop');
});