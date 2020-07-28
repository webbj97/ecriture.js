/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-07-23 16:08:29
 */
import baseIndexOf from './baseIndexOf.js'

/**
 * A specialized version of `includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  const length = array == null ? 0 : array.length
  return !!length && baseIndexOf(array, value, 0) > -1
}

export default arrayIncludes
