// 添加用户操作
const User = require('../../../db/userschma');
const md5 = require('md5');
module.exports = async(req, res) => {

    // 添加数据操作
    let rel = await User.deleteOne({ "_id": req.body.id });
    if (rel) {
        res.redirect('/admin/userlist');
    };
}