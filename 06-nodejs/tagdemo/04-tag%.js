// 导入ejs
const ejs=require('ejs');
// 数据
let dataObj=['foodGoods','fruitGoods','vegetableGoods'];

let template=`
<% laObj.forEach(function(value){ %>

    <h2><%= value %></h2>

<% }); %>
`;

// let htmls=ejs.render(template,dataObj);
let htmls=ejs.render(template,{

    laObj:dataObj
});
// 输出
console.log(htmls);



