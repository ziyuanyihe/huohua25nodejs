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

// 创建集合
// 2步:
// 1.定义集合的规则(哪些字段,什么数据类型等)
// 2.根据规则创建集合创建集合
// 字段和数据类型
const userSchema = new mongoose.Schema(
    {
        uname:String,
        age:Number,
        gender:String
    }
);
// 利用Schema创建集合--mongoose.model
// model('user',userSchema):(表名,模板)
// 表名users注意
const User =mongoose.model('user',userSchema);

// 查询数据

// User.find().then((result)=>{
//     console.log(result);
// });

// 精准查询
// User.find({age:{$gt:30}}).then((result)=>{
//     console.log(result);
// });

// 排序-1降序 1正序
// User.find().sort({"age":-1}).then((result)=>{
//     console.log(result);
// });

User.find().sort({"age":1}).then((result)=>{
    console.log(result);
});








