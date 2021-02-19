// 引入express
const express = require('express');
// console.log(express);
// 生成一个express实例app
const app = express();
// 当客户端以get方式访问/路由时
// req:请求
// res:响应
// 请求下一个中间件的处理
app.get("/getstudent", (req, res, next) => {
    // 对客户端做出响应 send方法会根据内容的类型自动设置请求头
    console.log(req.query.name);
    req.query.name = req.query.name+'超级会员';
    next();
});
app.get("/getstudent", (req, res) => {
    // 对客户端做出响应 send方法会根据内容的类型自动设置请求头,
    // 设置响应的状态码
    // res.status(404).send(req.name);
    res.send(200,req.query.name);
});
app.listen(3000, () => {
    console.log('后台服务器打开端口为3000');
});