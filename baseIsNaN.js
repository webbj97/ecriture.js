/*
 * @desc: 判断是否是NaN
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-07-23 16:21:50
 */
/**
 * The base implementation of `isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
    return value !== value; // 只有NaN在自比较时不等于自身
}

export default baseIsNaN