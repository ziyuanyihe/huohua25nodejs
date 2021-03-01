// 添加用户操作
const Product = require('../../../db/productschma');
// form的内容进行获取-- - formidable
let formidable = require('formidable');
let path = require('path');

module.exports = async(req, res) => {
    // 创建formidable的实例
    let form = new formidable.IncomingForm();
    // 配置上传文件的路径
    form.uploadDir = path.join(__dirname, '../', '../', '../', 'public', 'uploads');
    // 保存上传文件的后缀
    form.keepExtensions = true;
    // 解析form表单的数据
    form.parse(req, async(error, fields, files) => {
        // console.log(files.pic);
        // console.log(files.pic.name);
        if (!files.pic.name) {
            var rel = await Product.updateOne({ "_id": req.params.productId }, {
                title: fields.title,
                cate_id: fields.cate_id,
                goods_id: fields.goods_id,
                price: fields.price,
                fee: fields.fee,
                description: fields.description,
            });
        } else {
            var rel = await Product.updateOne({ "_id": req.params.productId }, {
                title: fields.title,
                cate_id: fields.cate_id,
                goods_id: fields.goods_id,
                price: fields.price,
                fee: fields.fee,
                description: fields.description,
                pic: files.pic.path.split('public')[1]
            });
        };
        if (rel) {
            res.redirect('/admin/productlist');
        };
    });
}