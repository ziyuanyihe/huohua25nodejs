const express = require('express');
// console.log(express)
const router = express.Router();
// 通过router配置二级路由
router.get('/',(req,res)=>{
    res.send('主页面home');
});
// 暴露router

module.exports = router;


