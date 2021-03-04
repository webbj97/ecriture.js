// 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。

// 引入版本
// 0.1.0

// 参数
// array (Array): 待处理的数组
// 返回值
// (Array): 返回过滤掉假值的新数组。

function _compact(array) {
    // 判断假值，可与理解成Boolean(value) === false
    if(array == null){
        return [];
    }
    let index = 0;
    let res = [];
    for(const val of array){
        if(val){
            res[index++] = val;
        }
    }
    return res;
}