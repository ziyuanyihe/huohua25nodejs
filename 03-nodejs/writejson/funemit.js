// 根据传入的对象--写入json文件

exports.setData = function(fs, data, eventEmitter) {
    let datajson = JSON.stringify(data, null, 4);
    fs.writeFile(__dirname + './../datajson2.json', datajson, err => {
        if (err) {
            console.log(err);
        } else {
            console.log('写入成功');
            // callback(datajson);
            // 触发
            eventEmitter.emit('dataevent', datajson);
        }
    });
}