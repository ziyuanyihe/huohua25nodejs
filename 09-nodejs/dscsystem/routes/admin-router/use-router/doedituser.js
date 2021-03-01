// 添加用户操作
const User = require('../../../db/userschma');
module.exports = async(req, res) => {
    // console.log(req.body);字段要对应
    let usermessage = {
        username: req.body.username,
        age: req.body.age,
        sex: req.body.sex,
        address: req.body.address
    };
    // console.log(req.body.userId);
    // console.log(req.query.userId);
    // console.log(req.params.userId);    
    // 添加数据操作
    let rel = await User.updateOne({ "_id": req.body.userId }, usermessage);
    if (rel) {
        res.redirect('/admin/userlist');
    };
}