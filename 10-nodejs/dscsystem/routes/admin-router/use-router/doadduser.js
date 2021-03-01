// 添加用户操作
const User = require('../../../db/userschma');
const md5 = require('md5');
module.exports = async(req, res) => {
    // console.log(req.body);字段要对应
    let usermessage = {
            username: req.body.username,
            password: md5(req.body.password),
            age: req.body.age,
            sex: req.body.sex,
            address: req.body.address
        }
        // 添加数据操作
    let rel = await User.create(usermessage);
    if (rel) {
        res.redirect('/admin/userlist');
    };
}