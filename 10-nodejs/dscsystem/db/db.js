// 1.引入mongoose模块
const mongoose = require('mongoose');
// 连接数据库dscsysdb
let DB = mongoose.connect('mongodb://localhost/dscsysdb', { useNewUrlParser: true, useUnifiedTopology: true });
// 监听失败还是成功
DB.then(() => {
    console.log('连接数据库成功');
}, () => {
    console.log('连接数据库失败');
});