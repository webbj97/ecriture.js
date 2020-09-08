/**
 * dad
 *
 * @desc: 检查“类对象”
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-08-13 15:43:24
 *
 * isObjectLike({})
 * // => true
 *
 * isObjectLike([1, 2, 3])
 * // => true
 *
 * isObjectLike(Function)
 * // => false
 *
 * isObjectLike(null)
 * // => false
 */

function isObjectList(obj) {
    return typeof obj === 'object' && obj !== null;
}