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

// 修改一条

// User.updateOne({name:"王百川"},{name:"刘百川"}).then((rel)=>{
//     console.log(rel);
// });

// 修改多条数据
User.updateMany({},{age:18}).then((rel)=>{
    console.log(rel);
});
