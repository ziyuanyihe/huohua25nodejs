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

// 创建集合规则
const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    gender:String
});

// 利用规则创建集合
const User = mongoose.model('User',userSchema);
// 删除
// { n: 1, ok: 1, deletedCount: 1 }
// n:标识匹配的1条数据
// ok:本次删除成功
// deletedCount:删除的数据的条数

// User.deleteOne({age:38}).then((rel)=>{
//     console.log(rel);
// });
// 删除多条数据
// User.deleteMany({}).then((rel)=>{
//     console.log(rel);
// });