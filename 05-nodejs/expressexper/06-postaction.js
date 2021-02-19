// 引入express框架
const express = require('express');
// 创建实例
const app = express();
// 引入bodyParser:获取post的请求参数
const bodyParser = require('body-parser');
// 设置静态资源
app.use(express.static(__dirname));
// 配置post请求的参数
// extended:false:参数时键值对的数据为String或者是Array
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 跨域请求
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Content-Type', 'application/json');
    next();
});
// 设置post请求
app.post('/addstudent', (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
});
// 监听端口
app.listen(3000, () => {
    console.log('后台服务开启3000');
});