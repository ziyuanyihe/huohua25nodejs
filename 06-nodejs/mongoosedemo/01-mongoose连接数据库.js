// 引入mongoose模块
const mongoose = require('mongoose');
// 连接数据库返回连接对象
let DB=mongoose.connect('mongodb://localhost/momokodb',{ useNewUrlParser: true,useUnifiedTopology: true });
// console.log(DB);
// 连接是否成功
DB.then(()=>{
    console.log('连接数据库成功');
},()=>{
    console.log('连接数据库失败');
});

