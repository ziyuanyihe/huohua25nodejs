// 引入express框架
const express = require('express');
// 创建服务
const app = express();
// 使用use匹配所有请求方式
// http://localhost:3000/login?name=zhangmeili&age=18
app.use((req, res, next) => {
    // 获取是请求的url:/login?name=zhangmeili&age=18
    console.log(req.url);
    next();
});
// 得到get的请求的参数
app.get('/login', (req, res) => {
    // { name: 'zhangmeili', age: '18' }
    console.log(req.query);
    res.status(200).send(req.query);
});
// 路由参数
app.get('/find/:id', (req, res) => {
    console.log(req.params);
    console.log(req.params.id);
    res.status(200).send(req.params);
});
app.get('/user/:uid/photos/:files', (req, res) => {
    console.log(req.params);
    res.status(200).send(req.params);
});
// 监听端口
app.listen(3000, () => {
    console.log('3000开启');
});