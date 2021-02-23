// 1.路由配置--一级二级三级
// 2.路由分发
const express = require('express');
const app = express();

// 得到二级路由的资源js可以省略
const admin = require('./routes/admin.js');
// http://localhost:3000/admin/login
app.use('/admin',admin);

// 监听端口
app.listen(3000,()=>{
    console.log('3000服务来了');
});



