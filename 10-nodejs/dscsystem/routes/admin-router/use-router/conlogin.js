const User = require('../../../db/userschma');
const md5 = require('md5');
module.exports = async(req, res) => {
    // console.log(req.body);
    // 获取用户名和密码跟数据库作比对
    let usernamerel = await User.findOne({ "username": req.body.username });
    // console.log(usernamerel);
    let userInfo = {
        username: req.body.username,
        password: md5(req.body.password)
    };
    // 用户名验证
    if (!usernamerel) {
        //如果验证失败留在本页面
        res.send('<script>alert("用户名不存在");location.href="/admin/login";</script>');
    } else {
        // 得到数据库的数据
        let loginrel = await User.findOne(userInfo);
        // 如果查询到数据库的信息,如果有,就跳转到index页面,如果没有提示用户名或密码错误
        if (loginrel) {
            // 跳转到用户列表的页面主页面
            // 设置session的数据和ejs公共数据
            req.app.locals.username = req.body.username;
            req.session.username = req.body.username;
            res.redirect('/admin/userlist');
        } else {
            res.send('<script>alert("密码错误");location.href="/admin/login";</script>');
        }
    }
}