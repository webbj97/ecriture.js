/*
 * @desc: indexOf
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-07-24 10:48:50
 */
/**
 * Gets the index at which the first occurrence of `value` is found in `array`
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. If `fromIndex` is negative, it's used as the
 * offset from the end of `array`.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * indexOf([1, 2, 1, 2], 2)
 * // => 1
 *
 * // Search from the `fromIndex`.
 * indexOf([1, 2, 1, 2], 2, 2)
 * // => 3
 */
function indexOf(array, value, fromIndex) {
    const len = array ? array.length : 0; // 数组长度
    if(!len) return -1; // 空数组或为传入查询对象，返回-1

    var index = fromIndex % len; // 记录查询的起始位置。分大于数组长度和小于数组长度
    const index = fromIndex <= len ? fromIndex :
}

console.log(indexOf())