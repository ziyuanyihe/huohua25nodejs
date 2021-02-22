// 第一步
// 安装
// npm install express --save
// npm install ejs --save
// 引入fs
const express = require('express');
// 不引入也可以
const ejs =require('ejs');
const fs = require('fs');
// 实例化
const app = express();

// 设置express设置模板引擎
app.set('view engine','ejs');
// 找到views里面的ejs文件默认也可以不写
// app.set('views',__dirname+ '/views');
// 请求数据
app.get('/',(req,res)=>{
    fs.readFile('./data/students.json','utf8',(err,data)=>{
        // 判断如果读取发生错误
        if(err){
            res.status(500).end();
            console.log(err);
        }else{
            studentsObj=JSON.parse(data);
            // 读取ejs文件然后传递studentsObj给ejs,呈现html代码
            // ejs.renderFile('./views/index.ejs',studentsObj,(err,str)=>{
            //     if(err){
            //         res.writeHead(500,{
            //             'Content-Type':'text/plain;charset="utf-8"'
            //         });
            //         res.end('500 - application ERROR');
            //     }else{
            //         res.writeHead(200,{
            //             'Content-Type':'text/html;charset="utf-8"'
            //         });
            //         res.end(str);
            //     }
            // });
            res.render("index",studentsObj);
        }
    });
});
// 监听端口
app.listen(3000,()=>{
    console.log('3000开启啦啦啦啦啦啦啊');
});
