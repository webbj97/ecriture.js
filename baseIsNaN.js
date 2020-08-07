/**
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
    return value !== value; // 只有NaN在自比较时不等于自身
}

export default baseIsNaN