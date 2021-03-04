// _.slice(array, [start=0], [end=array.length])#
// 裁剪数组array，从 start 位置开始到end结束，但不包括 end 本身的位置。

// Note: 这个方法用于代替Array#slice 来确保数组正确返回。

// 添加版本
// 3.0.0

// 参数
// array (Array): 要裁剪数组。
// [start=0] (number): 开始位置。
// [end=array.length] (number): 结束位置。
// 返回
// (Array): 返回 数组array 裁剪部分的新数组。

// 这个slice更像是拆解了裁剪的每一步

function _slice(array, start, end) {
    let length = array == null ? 0 : array.length;
    // 数组格式
    if (!length) {
        return [];
    }
    // null 代表未定义/ undefined代表定义但未赋值的
    start = start == null ? 0 : start;
    end = end === undefined ? length : end;
    if (start < 0) {
        // 倒数，且最多倒数至第0位
        // 绝对值 > 数组长度 = 0
        // 绝对值 < 数组长度 = 直接相加
        start = +start > length ? 0 : (length + start)
    }
    end = end > length ? length : end
    if (end < 0) {
        end += length
    }
    // 新数组的长度？
    //  >>> 0 无符号右移0位，保证值有意义
    length = start > end ? 0 : ((end - start) >>> 0)
    start >>>= 0;

    // 通过index < length 确定边界
    let index = -1
    const result = new Array(length)
    while (++index < length) {
        result[index] = array[index + start]
    }
    return result
}

const res = _slice([1,2,3,4], -1,2)
console.log('res:', res);
