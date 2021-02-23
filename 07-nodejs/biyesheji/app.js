// 总结:
// 应用级中间件:use,next,set--验证拦截
// 路由中间件 --分发路由
// 内置中间件:静态托管的资源express.static()
// 第三方中间件:body-parser,CORS,md5,ejs等等
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// 静态托管
// app.use(express.static('public'));
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// 解决ajax的跨域  
app.use(cors());
// 设置一级路由
app.use('/api/student',require('./routes/students'));

// 监听端口
app.listen(3008,()=>{
    console.log('3008端口开启');
});




