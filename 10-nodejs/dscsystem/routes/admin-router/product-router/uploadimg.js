// 需要中间件来得到file类型的数据
let formidable = require('formidable');
let path = require('path');
module.exports = (req, res) => {
    // console.log(req);
    let baseOrigin = req.headers.origin;
    // 创建formidable的实例
    let form = new formidable.IncomingForm();
    // 配置上传文件的路径
    form.uploadDir = path.join(__dirname, '../', '../', '../', 'public', 'uploads');
    // 保存上传文件的后缀
    form.keepExtensions = true;
    form.parse(req, (error, fields, files) => {
        if (error) {
            res.status(500).send(error);
        } else {
            let dataObj = {
                "errno": 0,
                "data": []
            };
            // 得到files对象中所有的key
            let relFile = Object.keys(files);
            // 遍历得到值---path属性
            relFile.forEach(value => {
                let urlObj = {};
                urlObj.url = baseOrigin + files[value].path.split('public')[1];
                dataObj.data.push(urlObj);
            });
            res.send(dataObj);
        }
    });
};