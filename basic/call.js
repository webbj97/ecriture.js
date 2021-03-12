// 创建1个call
Function.prototype.newCall = function(context, ...params){
    // 获得被指定this的环境
    var obj = context || window;
    // 获得方法
    // 当作为对象的属性被调用时，this指向该对象
    obj.func = this; // 此时this指向调用者
    const res = obj.func(...params);
    delete obj.func;
    return res;
}

function add(a, b){
    console.log('打印本身的属性:', this.name);
    return a+b
}

const res = add.newCall({name: '余光'}, 1, 2);
console.log('res:', res);


