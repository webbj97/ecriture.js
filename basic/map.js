Array.prototype.newMap = function(fn, _this) {
    const arr = this; // 获取调用者
    let that = _this || null; // 保存指定this
    let result = []; // 返回
    console.log('that:', that);
    for (let i = 0; i < arr.length; i++) {
        result.push(fn.call(that, arr[i]))
    }
    return result;
}

Array.prototype.reduceMap = function(fn, _this) {
    let arr = this;
    let that = _this || null;
    return arr.reduce((pre, next, i, a) => {
        return [...pre, fn.call(that, next)];
    }, [])
}

a = [1, 2, 3, 4, 5].reduceMap(item => item + 1)
console.log('a:', a);


