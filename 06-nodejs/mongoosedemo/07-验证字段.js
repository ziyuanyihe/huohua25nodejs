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
    name:{
        // 定义数据类型
        type:String,
        // 必填字段
        required:[true,'用户名不能为空'],
        minlength:[6,'用户名不能小于6位'],
        maxlength:[12,'用户名不能大于12位'],
        // 过滤空格
        trim:true
    },
    age:{
        type:Number,
        min:[18,'年龄不能小于18'],
        max:[100,'年龄不能大于100']
    },
    gender:{
        type:String,
        enum:{
            values:['男','女','保密'],
            message:'性别信息,如果请到专业机构确认'
        }
    },
    createtime:{
        type:Date,
        default:Date.now
    }
});

// 利用规则创建集合
const User = mongoose.model('User',userSchema);

// User.create({
//     name:'忘川彼岸名字去哪里',
//     age:20,
//     gender:'保密'
// }).then((rel)=>{
//     console.log(rel);
// });

User.create({
    name:'忘川彼岸名字去哪里你好呀你好呀大家好太棒了',
    age:16,
    gender:'中'
}).then((rel)=>{
    // console.log(rel);
}).catch((error)=>{
    let errsrel=error.errors
    // console.log(errsrel);
    for(var key in errsrel){
        console.log(key);
        console.log(errsrel[key].message);
    }
});


