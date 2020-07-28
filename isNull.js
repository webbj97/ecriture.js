/**
 * Checks if `value` is `null`.
 *
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * isNull(null)
 * // => true
 *
 * isNull(void 0)
 * // void 0 在Js中返回undefined consistent-return
 * // => false
 */
function isNull(value) {
    return value === null
}

export default isNull