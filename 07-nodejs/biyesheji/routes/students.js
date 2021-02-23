var express = require('express');
var router = express.Router();

// 引入连接数据库的代码
require('../db/db.js');
let userschma = require('../db/userschma');

// 查询学生
router.get('/getStudent', function(req, res) {
    userschma.find().then((data)=>{
        res.status(200).send(data);
    });
});

// module.exports 提供了暴露接口的方法
module.exports = router;