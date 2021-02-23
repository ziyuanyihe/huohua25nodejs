const express = require('express');
// console.log(express)
const router = express.Router();
// 通过router配置二级路由
router.get('/login',(req,res)=>{
    res.send(200,'login成功');
});
// 暴露router

module.exports = router;


