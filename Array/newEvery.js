/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-09-15 17:29:48
 */
Array.prototype.newEvery = function(callback, target = this) {
    const arr = target; // 保存this
    const result = []; // 返回新数组
    const len = arr.length;

    if (arr.length === 0) return []; // 如果为空数组，返回[]

    for (let i = 0; i < len; i++) {
        if (callback(arr[i], i, arr)) result.push(arr[i]); //如果判定条件为true，保存至新数组
    }
    return result; // 返回新数组
}

const newArr = [1, 2, 3, 4, 5].newEvery((item, index, array) => {
    return item > 2;
}, [2,3,4,5])

console.log('newArr:', newArr);