// 只做分发路由操作
const express = require('express');
const router = express.Router();
// 登录页面操作
router.get('/login', require('./admin-router/login.js'));
// 登录后的列表
router.get('/productlist', require('./admin-router/productlist.js'));
// 增加商品
router.get('/productadd', require('./admin-router/productadd.js'));
// 修改商品
router.get('/productedit', require('./admin-router/productedit.js'));
// 增加用户信息

// 暴露router
module.exports = router;