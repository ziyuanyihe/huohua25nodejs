const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();
// 引入session模块
const session = require('express-session');
require('./db/db');
// 1.配置ejs模板引擎
app.set('view engine', 'ejs');
// 2.配置静态托管
app.use(express.static('public'));
// 3.设置bodyParser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// 设置当前页面的过期时间
app.use(session({
    secret: 'qwqwqwq',
    // 强制保存session:默认true不保存,false保存
    resave: false,
    // 强制保存未初始化session
    saveUninitialized: true,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    },
    //强制重置cookie过期时间
    rolling: true
}));
// 当不是登录页面及登录操作时,进行所有的拦截重定向到登录页面
app.use((req, res, next) => {
    if (req.url != '/admin/login' && req.url != '/admin/conlogin' && !req.session.username) {
        res.redirect('/admin/login');
    } else {
        next();
    }
});

// 配置一级路由
app.use('/admin', require('./routes/admin.js'));

// 监听端口
app.listen(3000, () => {
    console.log('3000端口开启了');
});