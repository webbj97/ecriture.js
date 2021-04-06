const arr = [
    { name: 1, },
    { name: 2, },
    { name: 3, },
    { name: 4, },
    { name: 5, },
]

let res = arr.reduce((pre, next, i, num) => pre.concat([next.name]), [])
// reduce 实现 map

let arrr = [1111, 2222]
a = [1, 2, 3, 4, 5].map(item => item + 1, arrr)
console.log('a:', a); // [2, 3, 4, 5, 6]

Array.prototype.newMap = function(fn, _this) {
    const arr = this;
    let that = _this || null;
    let result = [];
    console.log('that:', that);
    for (let i = 0; i < arr.length; i++) {
        let res = fn.call(that, arr[i])
        result.push(res)
    }
    return result;
}

b = [1, 2, 3, 4, 5].newMap(function(item) {
    return this.a
}, { a: '余光' })

console.log('b:', b);