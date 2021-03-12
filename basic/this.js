// 作为普通函数
// function normal(){
//     // console.log('this:', this === window); // 注意在浏览器中 node环境下 this指向node的全局变量global
// }
// normal();

// 作为对象的属性
// const obj = {
//     func: function(){
//         console.log('obj-this:', this === obj);
//     }
// }
// obj.func();

// 作为构造函数
// function Person(name){
//     this.name = name;
//     console.log('new-this:', this);
// }
// const person = new Person('余光');

// 箭头函数
// this.testName = '余光'
// const a = () => {
//     console.log('箭头-this:', this.testName);
// }
// a()

// 被call和apply修改后的this
// 指定this
global.name= '余光' // node里是global
function testCall(){
    console.log('testCall-this', this.name)
}
const obj = {
    name: '我是被指定的对象'
}

testCall.call(obj)