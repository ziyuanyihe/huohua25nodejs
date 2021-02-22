// 引入ejs模块
const ejs = require('ejs');

// 数据
var data={
    name:'张美丽'
};
// <%= :输出解析后的html内容
var template=`<p>Hello <%= name %></p>`;
// 通过ejs进行
var htmls=ejs.render(template,data);

// 输出通过ejs解析后的代码
console.log(htmls);