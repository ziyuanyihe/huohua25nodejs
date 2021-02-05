let firstName = '爱新觉罗玄烨';
let age = 18;
// 定义的方法
function getAge() {
    return age;
}
// 暴露出去firstName属性
// console.log(module.exports);
// module.exports.firstName = firstName;
// module.exports.age = age;
// module.exports.getAge = getAge;
// 空对象
// module.exports = {};
// module.exports和exports共同指向同一个对象

// exports.firstName = firstName;
// exports.age = age;
// 如果重新为exports和module.exports重新赋值以如果为module.exports优先
// exports = {
//     age: age
// };
// module.exports = {
//     firstName: firstName
// };

// 导出多个内容
exports = module.exports = {
    firstName: firstName,
    age: age,
    getAge: getAge
};