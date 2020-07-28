/*
 * @desc: 严格相等的indexOf
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-07-23 16:11:16
 */
/**
 * A specialized version of `indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function strictIndexOf(array, value, fromIndex){
    let index = fromIndex - 1; // 发现写下标的时候总是-1，终于后边的++index对应
    const len = array.length; // 记录数组长度，用于遍历

    for(let i = 0; i < len; i++){
        if(array[i] === value){
            return index;
        }
    }

    // while(++index < len){
    //     if(array[index] === value) return index;
    // }

    return -1
}

export default strictIndexOf