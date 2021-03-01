// 修改用户信息请求ejs
const Product = require('../../../db/productschma');
module.exports = async(req, res) => {
    // 根据id获取数据库的数据
    let reldata = await Product.findOne({ '_id': req.query.id });
    // 把数据库的数据传递给页面
    res.render('./admin/product/productedit', {
        editData: reldata
    });
}