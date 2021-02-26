const express = require('express');
const router = express.Router();
// 配置二级路由
// 登录的页面
router.get('/login', require('./admin-router/use-router/login'));
// 做登录验证
router.post('/conlogin', require('./admin-router/use-router/conlogin'));
// 进入用户列表页面
router.get('/userlist', require('./admin-router/use-router/userlist'));
// 添加用户操作页面
router.get('/adduser', require('./admin-router/use-router/adduser'));
// 添加用户操作
router.post('/doadduser', require('./admin-router/use-router/doadduser'));
// 进入用户修改页面
router.get('/edituser', require('./admin-router/use-router/edituser'));
// 修改用户操作
router.post('/doedituser/:userId', require('./admin-router/use-router/doedituser'));
// 删除用户
router.post('/deleteuser', require('./admin-router/use-router/deleteuser'));
// 搜索用户操作
router.get('/searchuser', require('./admin-router/use-router/searchuser'));

module.exports = router;