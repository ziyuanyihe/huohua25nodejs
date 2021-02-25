// 登录的请求ejs
const User = require('../../../db/userschma');
module.exports = async(req, res) => {
    console.log(req.query);
    // 分页操作
    // 当前页
    // 每页几条数据
    // 一共多少条多少页
    // 初始化及判定当前页码
    let page = Number(req.query.page) || 1;
    console.log(req.query.page);
    // 每页5条数据
    let size = req.query.size || 5;
    // 共多少条数据
    let total = await User.countDocuments({});
    // 一共多少页
    let totalPage = Math.ceil(total / size);
    // skipdata 跳过去的数据
    let skipdata = (page - 1) * size

    // 查询数据
    const result = await User.find().limit(size).skip(skipdata);
    res.render('./admin/userlist.ejs', {
        // 总数据
        userlist: result,
        // 一共多少条数据
        total: total,
        // 当前页码
        page: page,
        // 总页
        totalPage: totalPage
    });
}