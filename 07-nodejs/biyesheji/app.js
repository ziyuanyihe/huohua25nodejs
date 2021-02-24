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


// 1.每一个方法为什么要这么用use,拦截,代码不走
// 2.请求与处理要对应,操作逻辑后,要返回最新的数据
// 3.得到成功后的结果然后返回200,失败如何处理返回500




