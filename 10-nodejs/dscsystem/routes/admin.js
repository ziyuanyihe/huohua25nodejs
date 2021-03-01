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
// 退出操作
router.get('/signout', require('./admin-router/use-router/signout'));


// 以下内容操作商品的业务逻辑
router.get('/productadd', require('./admin-router/product-router/productadd'));
// 配置富文本的图片上传接口
// /upload-img
router.post('/upload-img', require('./admin-router/product-router/uploadimg'));
// 增加商品doproductadd
router.post('/doproductadd', require('./admin-router/product-router/doproductadd'));
// 展示商品列表productlist
router.get('/productlist', require('./admin-router/product-router/productlist'));

module.exports = router;