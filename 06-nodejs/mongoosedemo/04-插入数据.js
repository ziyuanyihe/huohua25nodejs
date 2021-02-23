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

// 插入数据
User.create({
    name:'王百川',
    age:20,
    gender:'男'
}).then((rel)=>{
    console.log(rel)
});

User.create([{
    name:'张美丽1',
    age:20,
    gender:'男'
},{
    name:'张美丽2',
    age:21,
    gender:'男'
},{
    name:'张美丽3',
    age:22,
    gender:'男'
}]).then((rel)=>{
    console.log(rel)
});

