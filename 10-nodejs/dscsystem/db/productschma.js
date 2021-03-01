const mongoose = require('mongoose');
const ProductSchma = new mongoose.Schema({
    // 商品名称
    title: {
        type: String,
        required: [true, "商品名称不能为空"],
        trim: true
    },
    // 一级分类
    cate_id: {
        type: String
    },
    // 二级分类
    goods_id: {
        type: String
    },
    // 缩略图
    pic: {
        type: String
    },
    price: {
        type: Number
    },
    fee: {
        type: Number
    },
    description: {
        type: String
    }

});

const Product = mongoose.model('Product', ProductSchma);

// 暴露出去
module.exports = Product;