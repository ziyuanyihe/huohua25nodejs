// 1.引入mongoose模块
// require('./db')
const mongoose = require('mongoose');
// 创建集合规则
const userSchema = new mongoose.Schema({
    username: {
        // 定义数据类型
        type: String,
        // 必填字段
        required: [true, '用户名不能为空'],
        minlength: [6, '用户名不能小于6位'],
        maxlength: [12, '用户名不能大于12位'],
        // 过滤空格
        trim: true
    },
    password: {
        type: String,
        required: true,
        // 过滤空格
        trim: true
    },
    age: {
        type: Number,
        min: [18, '年龄不能小于18'],
        max: [100, '年龄不能大于100']
    },
    sex: {
        type: String,
        enum: {
            values: ['男', '女', '保密'],
            message: '性别信息,如果请到专业机构确认'
        }
    },
    address: {
        type: String
    },
    createtime: {
        type: Date,
        default: Date.now
    }
});

// 利用规则创建集合
const User = mongoose.model('User', userSchema);
// const Product = mongoose.model('Product', userSchema);

// 暴露出去.使用User
module.exports = User;