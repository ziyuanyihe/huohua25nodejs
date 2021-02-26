// 修改用户信息请求ejs
const User = require('../../../db/userschma');
module.exports = async(req, res) => {
    // console.log(req.query.id);
    // 根据id获取数据库的数据
    let reldata = await User.findOne({ '_id': req.query.id });
    // 把数据库的数据传递给页面
    res.render('./admin/edituser.ejs', {
        editData: reldata
    });
}