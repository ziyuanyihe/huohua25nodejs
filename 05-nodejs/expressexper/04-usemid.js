// 引入express
const express = require('express');
// 使用express创建服务器
const app = express();
// 使用use中间件
app.use((req, res, next) => {
    console.log(req.url);
    if (req.url == '/getstudent') {
        next();
    } else {
        res.status(404).send('resoure is not fond');
    }
});
// 处理当前请求
app.use('/getstudent', (req, res) => {
    res.send('资源找到');
});
// 开启端口监听
app.listen(3000, () => {
    console.log('3000端口开启');
});