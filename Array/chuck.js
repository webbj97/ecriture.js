// _.chunk(array, [size=1])
// 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。

// 参数
// array (Array): 需要处理的数组
// [size=1] (number): 每个数组区块的长度
// 返回
// (Array): 返回一个包含拆分区块的新数组（注：相当于一个二维数组）。

// 例子
// _.chunk(['a', 'b', 'c', 'd'], 2);
// // => [['a', 'b'], ['c', 'd']]

// _.chunk(['a', 'b', 'c', 'd'], 3);
// // => [['a', 'b', 'c'], ['d']]


// 主要利用 slice
function slice(array, start, end) {
    return array.slice(start, end)
}

function _chunk(array, size = 1) {
    const length = array === null ? 0 : array.length;
    if(!length){
        return []
    }
    if(size > length){
        size = length
    }
    const res = [];
    for (let i = 0; i < array.length; i += size) {
        res.push(slice(array, i, i + size))
    }
    return res;
}

const res = _chunk(['a', 'b', 'c', 'd'], 5);
console.log('res:', res);