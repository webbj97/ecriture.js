/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-08-14 15:37:46
 */
/**
 *
 * @param {*} value The value to push.
 * @returns {number} Returns the length of the array
 * @example
 *
 * var arr = []
 * arr.arrayPush(1)
 * // => 1
 *
 * isObject(1,2,3)
 * // => 3
 *
 * isObject([1,2,3,4])
 * // => 1 [[1,2,3,4]]
 */
Array.prototype.arrayPush = function(){
    const arr = this;
    const len = arr.length;
    const args = arguments;
    for(let i = 0; i < args.length; i++){
        arr[len+i] = args[i]
    }
    return arr.length
}

var arr = [];
arr.arrayPush(1,2,3,4)
