// 退出操作
module.exports = (req, res) => {
    // 1.清空session
    req.session.destroy();
    // 2.重定向到登录页面
    res.redirect('/admin/login');
}