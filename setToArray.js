/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-08-07 15:02:37
 */
/*
 * @desc: set转换成数组
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-07-23 16:00:28
 */

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
    let index = -1; // 感觉写0， index++ 更符合逻辑思路
    const res = new Array(set.size);

    set.forEach((value) => {
        res[++index] = value
    })
    return res
}

export default setToArray