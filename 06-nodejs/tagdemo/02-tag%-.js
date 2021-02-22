// 引入ejs模块
const ejs = require('ejs');
var data={
    dataScript:'<script>document.write(666)</script>',
    myTest:'123你好!@~#$%^&*()<>'
}
// 设置模板
var template=`
<p>Hello <%=dataScript%></p>
<p>Hello <%-dataScript%></p>
<p>Hello <%=myTest%></p>
<p>Hello <%-myTest%></p>
`;
// <%=输出转义的数据到模板
// 一定要考虑安全性问题
// <%-输出非转义的数据到模板
var htmls=ejs.render(template,data);

console.log(htmls);