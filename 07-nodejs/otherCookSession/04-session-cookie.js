const express = require('express');
const { Cookie } = require('express-session');
// npm install express-session --save
const session = require('express-session');

// 创建服务
const app = express();
// session简介
// session是一种记录客户端状态的应用,session运行在服务端,当客户端第一次访问时,可以记录客户的登录信息等
// 当客户端再次访问时,可以判定登录状态,作出提示,进行拦截工作

// session对象key value(Cookie)

app.use(session({
    secret: 'qwqwqwq',
    name: 'seccapp',
    // 强制保存session:默认true不保存,false保存
    resave: false,
    // 强制保存未初始化session
    saveUninitialized: true,
    cookie: {
        // https协议
        // secure:true,
        maxAge: 10 * 1000
    },
    //强制重置cookie过期时间
    rolling: true
}));
// 设置登录信息
app.get('/login', (req, res) => {
    // 设置session的属性
    req.session.uname = 'zhangmeili';
    res.send('登录成功');
});
// 判定是否有登录信息存在
app.get('/mainpage', (req, res) => {
    console.log(req.session.uname);
    // 判定信息是否存在
    if (req.session.uname) {
        res.send('欢迎' + req.session.uname + '登录');
    } else {
        res.send('请重新登录');
    }
});
app.listen(3000, () => {
    console.log('3000端口已经开启可以溜溜');
});