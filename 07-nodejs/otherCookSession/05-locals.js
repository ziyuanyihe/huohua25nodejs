const express = require('express');
const app = express();
const ejs = require('ejs');

// 配置ejs模板
app.set("view engine", "ejs");

// 设置一个ejs中使用的公共数据
app.locals.user = {
    uname: '张美丽'
};
app.get('/index', (req, res) => {
    // 调用
    res.render('index');
});
app.get('/login', (req, res) => {
    // 调用
    res.render('login');
});
app.listen(3000, () => {
    console.log('3000端口开启了.........');
});