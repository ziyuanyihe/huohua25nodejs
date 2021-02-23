const express =require('express');
const app = express();
// 使用db模块
require('./db/db.js');
let user=require('./db/userschma.js');
// 请求表中的数据
app.get('/getusers',(req,res)=>{
    // 查询数据信息
    user.find().then((data)=>{
        res.status(200).send(data);
    });
});
// 监听
app.listen(3000,()=>{
    console.log('3000端口开启可以开始工作');
});