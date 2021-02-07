// 查看数据库列表
// show dbs
// #创建及切换数据库
// use DATABASE_NAME
// #插入数据，以及创建集合并插入
// db.user.insert({"name":"王帅","age":"18","gender":"女"})
// db.studentinfo.insert({"name":"张美丽","age":20,"gender":"男"})
// 删除数据库
// db.dropDatabase()
// 查看集合
// show collections
// 创建集合
// db.createCollection('studentgrade')
// 删除集合
// db.studentgrade.drop()

// db.user.insert({ "name": "王帅1", "age": 20, "gender": "男" })
// db.user.insert({ "name": "张美丽1", "age": 22, "gender": "女" })

// try {
//     db.user.insertMany([
//         { "name": "王帅2", "age": 20, "gender": "男" },
//         { "name": "张美丽2", "age": 22, "gender": "女" },
//         { "name": "张美丽3", "age": 30, "gender": "女" },
//         { "name": "张美丽4", "age": 32, "gender": "女" }
//     ])
// } catch (e) {
//     print(e)
// }

// 查询user集合的数据
// 查询所有的数据
// db.user.find()
// 过滤
// 查询年龄为18的数据
// db.user.find({ "age": 18 })
db.user.find({ "age": "18" })
    // 查询小于22的数据lt:less than
    // db.user.find({ "age": { $lt: 22 }})
    // 查询大于30的数据gt:greater than
    // db.user.find({ "age": { $gt: 30 } })
    // 查询小于等于22的数据
    // db.user.find({"age":{$lte:22}})
    // 查询大于等于30的数据
    // db.user.find({"age":{$gte:30}})
    // 不等于30的数据
    // db.user.find({ "age": { $ne: 30 } })
    // 查询大于20到小于32之间的数据
    // db.user.find({ "age": { $gt: 20, $lt: 32 } });
    // db.user.find({ "age": { $gte: 20, $lte: 32 } });
    // 等于张美丽的数据
    // db.user.find({ "name": "张美丽" })
    // 查询所有姓名含有张的
    // db.user.find({ "name": /张/ })
    // db.user.insert({ "name": "美丽张", "age": 22, "gender": "女" })
    // db.user.find({ "name": /^张/})
    // db.user.find({ "name": /张$/ })
    // 排序升序1和降序-1
    // db.user.find().sort({ "age": -1 })
    // db.user.find().sort({ "age": 1 })
    // 或者22或者32之间的数据
    // db.user.find({ $or:[{"age": 22 }, { "age": 32 }]})
    // 精准查询
    // db.user.find({"name":"张美丽4","age":32});
    // 查询数据条数
    // db.user.find().count()
    // 限制条数
    // db.user.find().limit(4)
    // 第一条数据
    // db.user.findOne()
    // 跳过去skip
    // db.user.find().skip(1).limit(2)
    // db.user.find().skip(2).count()
    // 限制后的数据
    // db.user.find().skip(2).count(true)
    // 易读方式pretty()
    // db.user.find().pretty()
    // 更新数据()
    // db.user.update({ "name": "王帅" }, { "name": "王帅呆呆", "age": 27,"gender": "男" })
    // 更新数据的问题
    // db.user.update({ "age": 22 }, { "age": 23 })
    // db.user.update({ "age": 26 }, { "name": "张美丽1", "age": 27, "gender": "女" })
    // 更新一条某一字段
    // db.user.update({ "age": 20 }, { $set: { "age": 23 }})
    // 多条数据更新
    // db.user.update({ "age": 22 }, { $set: { "age": 23 } }, { multi: true })
    // 删除文档
    // 删除数据--只要符合条件就可以删除
    // db.user.remove({ "age": 20 });