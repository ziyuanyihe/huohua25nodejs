// 1.引入mongoose模块
const mongoose = require('mongoose');
// 连接数据库
let DB = mongoose.connect('mongodb://localhost/momokodb',{ useNewUrlParser: true,useUnifiedTopology: true });
// 监听失败还是成功
DB.then(()=>{
    console.log('连接数据库成功');
},()=>{
    console.log('连接数据库失败');
});