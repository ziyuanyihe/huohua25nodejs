const express = require('express');
// 引入操作cookie的第三方中间件
const cookieParser= require('cookie-parser');

const app = express();
// 使用use进行拦截使用cookie-parse
app.use(cookieParser());
// 设置cookie
app.get('/setCookie',(req,res)=>{
    res.cookie("pwToken222",'1212sssorrrro',{
        // 设置cookie的过期时间,毫秒数
        maxAge: 24*60*60*1000
    });
    res.send('设置成功')
});
// 得到cookie
app.get('/getCookie',(req,res)=>{
    // 得到cookie
    console.log(req.cookies);
    // {"pwToken":"1212sssoo"}
    res.send(req.cookies);
})
// 监听端口
app.listen(3000,()=>{
    console.log('3000端口开启');
});
