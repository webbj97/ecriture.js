// _.concat(array, [values])#
// 创建一个新数组，将array与任何数组 或 值连接在一起。

// 引入版本
// 4.0.0

// 参数
// array (Array): 被连接的数组。
// [values] (...*): 连接的值。
// 返回值
// (Array): 返回连接后的新数组。
function _push(array, val) {

}

function _concat(array, ...arg) {
    if (array == null) {
        return [];
    }
    const lengthArg = arg.length;
    const res = [...array];
    if (!lengthArg) {
        return res;
    }
    let lengthArray = array.length;
    for (let i = 0; i < lengthArg; i++) {
        let cur = arg[i];
        // 思路是判断类型
        // 抹平一次数组
        // 因为存在数组，所以不能用下标
        if (cur instanceof Array) {
            for (let j = 0; j < cur.length; j++) {
                res.push(cur[j])
            }
        }else{
            res.push(cur)
        }
    }
    return res;
}

const res = _concat([1, 2, 3, 4], 1, { name: 'yuguang' }, 3, ['a'], 5)
console.log('res:', res);