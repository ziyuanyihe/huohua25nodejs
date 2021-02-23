const express = require('express');
const app =  express();
const cors = require('cors');
// cors：cross-Origin-resouce-sharing:跨域资源共享

// 如何使用解决跨域
app.use(cors());
// 引入连接数据库的代码
require('./db/db.js');
let userschma = require('./db/userschma');

// /api/student/getStudent
// get请求
app.get('/api/student/getStudent',(req,res)=>{
    userschma.find().then((data)=>{
        res.status(200).send(data);
    });
});
// 监听端口
app.listen(3008,()=>{
    console.log('3008端口开启');
});


