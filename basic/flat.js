Array.prototype.flatten = function(deep = 1) {
    let arr = this;
    if (deep < 1) return arr;
    return arr.reduce((prev, next, i, n) => ([
        ...prev,
        ...(Array.isArray(next) ? next.flatten(deep - 1) : [next])
    ]), [])
}

function setFlat(val, deep) {
    if (deep < 1) return val;
    return val.reduce((prev, next, i, n) => {
        if (Array.isArray(next)) {
            return prev.concat(setFlat(next))
        } else {
            return prev.concat([next])
        }
    }, [])
}

const res = [1, 2, [3],[1, [2]]]
[1, 2, [3],[1, [2]]].flatten()
console.log('res:', res);
// console.log('res', setFlat(res))
// 如果是数组 就解构
// concat