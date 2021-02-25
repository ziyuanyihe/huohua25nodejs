// npm install express body-parser ejs mongoose cors --save
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();
// 设置模板引擎
app.set("view engine", "ejs");
// 得到post请求信息
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
// 静态托管
app.use(express.static('public'));

// 配置路由信息
const admin = require("./routes/admin.js");
app.use('/admin', admin);

// 端口开启
app.listen(3000, () => {
    console.log('3000端口开启了');
});