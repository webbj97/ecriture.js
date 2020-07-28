/*
 * @desc: 判断是否是对象
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-07-24 14:00:09
 */
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * 最终理解为，数组、函数、对象、正则、构造器生成的都归类为对象
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([1, 2, 3])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */
function isObject(value) {
    const type = typeof value
    // if(value === null) return false; // null === null => true
    // if(type === 'object' || type === 'function') return true;
    // return false

    // 整理为下面的判断

    return value != null && (type === 'object' || type === 'function')
}

export default isObject