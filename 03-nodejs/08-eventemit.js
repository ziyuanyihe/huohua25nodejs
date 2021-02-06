// const { EventEmitter } = require("events");

// 1.对于一个EventEmitter实例,绑定了一个监听器,eventEmitter.on()来注册事件,eventEmitter.emit()用于触发事件
// 2.nodejs单线程,类似于进入了以while(true)的事件循环,直到没有事件的观察者退出,每个异步事件都生成了一个事件的观察者,事件发生就会去调用回调函数

// 异步事件驱动架构，其中某些类型的对象（又称触发器，Emitter）会触发命名事件来调用函数（又称监听器，Listener）。
// var events = require('events');
// // EventEmitter:事件触发的类
// var eventEmitter = new events.EventEmitter();
// // 通过on来进行注册
// eventEmitter.on('eventName', (arg1, arg2) => {
//     console.log('触发事件', arg1, arg2);
// });
// // 通过emit进行触发
// eventEmitter.emit('eventName', 10, 20);
// 模拟其他模块继承EventEmitter类
var EventEmitter = require('events').EventEmitter;

class ProClient extends EventEmitter {
    constructor() {
        super()
    }
    handler() {
        console.log('handler6666');
    }
};

let proClient = new ProClient();
// 注册
proClient.on('prosetData', proClient.handler);
// 触发
proClient.emit('prosetData');