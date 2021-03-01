// 需要中间件来得到file类型的数据
// 按需引入
const Product = require('../../../db/productschma');
let formidable = require('formidable');
let path = require('path');
module.exports = (req, res) => {
    // 创建formidable的实例
    let form = new formidable.IncomingForm();
    // 配置上传文件的路径
    form.uploadDir = path.join(__dirname, '../', '../', '../', 'public', 'uploads');
    // 保存上传文件的后缀
    form.keepExtensions = true;
    form.parse(req, async(error, fields, files) => {
        if (error) {
            res.status(500).send(error);
        } else {
            let productrel = await Product.create({
                title: fields.title,
                cate_id: fields.cate_id,
                goods_id: fields.goods_id,
                price: fields.price,
                fee: fields.fee,
                description: fields.description,
                pic: files.pic.path.split('public')[1]
            });
            // 如果创建数据库成功
            if (productrel) {
                res.redirect('/admin/productlist');
            }
        }
    });
};