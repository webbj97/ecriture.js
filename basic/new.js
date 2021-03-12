// new 的
// const obj = new Object();
// console.log('obj:', obj);
// console.log('obj:', typeof obj);

// new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

// new 关键字会进行如下的操作：

// 创建一个空的简单JavaScript对象（即{}）；
// 链接该对象（设置该对象的constructor）到另一个对象 ；
// 将步骤1新创建的对象作为this的上下文 ；
// 如果该函数没有返回对象，则返回this。

function Person(name){
    this.name = name;
    return null
}
Person.prototype.sayName = function () {
    console.log(this.name);
}
Person.prototype.type = '人'

const test = new Person('哈哈哈')
console.log('test:', test);

function objectFactory(){
    const obj = new Object(); // 创建1个对象
    const Constructor = [].shift.call(arguments); // 取构造函数，规定构造器
    obj.__proto__ = Constructor.prototype; // 实例的引式原型 指向 构造函数的显示原型
    const ret = Constructor.apply(obj, arguments); // 在 Constructor函数运行时，使用的this，借用外部传入的构造器给obj设置属性
    // 构造函数本身存在返回值
    return typeof ret === 'object' ? ret || obj : obj; // 兼容返回值为null的情况
}
const person = objectFactory(Person, '余光')
console.log('实例:', person);
console.log('属性:', person.name);
console.log('构造函数属性:', person.type);
person.sayName()


// 加入构造函数有返回值

