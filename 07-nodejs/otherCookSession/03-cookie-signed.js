const express = require('express');
// 引入操作cookie的第三方中间件
const cookieParser= require('cookie-parser');
//初始化web服务方法
const app = express();
// 使用use进行拦截使用cookie-parse
// 传递一个字符串,作为加密签名的密码
// 1.设置签名的字符串
app.use(cookieParser('8888kkkyyoo'));
// 设置cookie
app.get('/setCookie',(req,res)=>{
    res.cookie("wwid",'pp',{
        // 设置cookie的过期时间,毫秒数
        maxAge: 24*60*60*1000,
        // 设置允许使用signed
        signed:true
    });
    res.send('设置成功')
});
// 得到cookie
app.get('/getCookie',(req,res)=>{
    // 得到cookie
    console.log(req.cookies);//{}
    console.log(req.signedCookies);//{ wwid: 'pp' }
    res.send(req.signedCookies);
})
// 监听端口
app.listen(3000,()=>{
    console.log('3000端口开启');
});
