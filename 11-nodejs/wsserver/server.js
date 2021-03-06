// nodejs-websocket引入
const ws = require('nodejs-websocket');
console.log('新的连接');
var clientCount = 0;
var server = ws.createServer(function(conn) {
    console.log('创建server服务器');
    // text事件,接受数据
    // console.log(conn);
    clientCount++;
    conn.username = 'user' + clientCount;
    // 告诉所有人,有用户进来了
    broadcast(conn.username + '已加入聊天');
    // 从前台接受数据后通过text方法进行广播出去
    conn.on('text', function(str) {
        broadcast(conn.username + ':' + str);
    });
    // 关闭当前连接
    conn.on('close', function(code, reason) {
        // console.log(code);
        console.log(reason);
        broadcast(conn.username + '离开了');
    });
    conn.on('error', function(error) {
        console.log(error);
    });


}).listen(8001);
console.log('端口开启8001');
// 广播给所有人
function broadcast(str) {
    // console.log(server.connections);
    server.connections.forEach((connect) => {
        // console.log(connect);
        // 传回前台消息
        connect.sendText(str);
    });
}