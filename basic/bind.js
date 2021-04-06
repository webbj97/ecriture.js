// bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

//调用绑定函数时作为 this 参数传递给目标函数的值。

//如果使用new运算符构造绑定函数，则忽略该值。当使用 bind 在 setTimeout 中创建一个函数（作为回调提供）时，作为 thisArg 传递的任何原始值都将转换为 object。如果 bind 函数的参数列表为空，或者thisArg是null或undefined，执行作用域的 this 将被视为新函数的 thisArg。

// Function.prototype.newBind = function(context, ...params) {
//     var ArrayPrototypeSlice = Array.prototype.slice;
//     // 接收方法
//     let self = this;
//     let obj = context || null;
//     // 维护参数数组：bind方法允许传递参数，返回的函数允许传递参数
//     let arg = [...params];
//     // 返回函数
//     return function() {
//         // 此时的arguments是返回函数的参数
//         arg = arg.concat(Array.prototype.slice.call(arguments))
//         // 执行闭包函数的时候，修改this的绑定值，通知允许他有返回值
//         return self.apply(obj, arg);
//     }
// }

// obj = { name: '余光' }

// function show(a, b) {
//     console.log('name', this.name);
//     return a + b;
// }
// const func = show.newBind(obj, 1)
// console.log('func:', typeof func);
// console.log(func(2))

// 所以我们可以通过修改返回的函数的原型来实现，让我们写一下：

Function.prototype.bind2 = function(context) {
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var fBound = function() {
        var bindArgs = Array.prototype.slice.call(arguments);
        // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
        if (this instanceof fBound) {
            return self.apply(this, args.concat(bindArgs));
        } else {
            // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
            return self.apply(context, args.concat(bindArgs));
        }
        // return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
    }
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
    fBound.prototype = this.prototype;
    return fBound;
}

var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log('value:', this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.bind2(foo, 'daisy');

var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log('obj.habit:', obj.habit);
console.log('obj.friend:', obj.friend);
// shopping
// kevin
