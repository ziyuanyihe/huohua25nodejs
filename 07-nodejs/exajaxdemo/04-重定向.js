// 1.路由配置--一级二级三级
// 2.路由分发
const express = require('express');
const app = express();

// 得到二级路由的资源js可以省略
const home = require('./routes/home.js');
// http://localhost:3000/
// http://localhost:3000/home

app.get('/',(req,res)=>{
    // 重定向
    res.redirect('/home');
});
app.use('/home',home);
// 监听端口
app.listen(3000,()=>{
    console.log('3000服务来了');
});



