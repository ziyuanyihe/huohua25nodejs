// 引入ejs模块
const ejs = require('ejs');

// 设置模板
var template=`
<div>
    <%# 导航头部%>
    <nav>导航部分</nav>
</div>
<div>
    <%# 主体部分-%>
    <div class="content">主体部分</div>
</div>
`;
// <%#注释内容不输出
// -%>删除紧随其后的换行符
var htmls=ejs.render(template);

console.log(htmls);