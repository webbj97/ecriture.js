/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-09-08 16:50:23
 */
/**
 * @name: 补零
 * @msg:
 * @param {number} num 传入的数字
 * @param {number} n 补0的长度
 * @return {string} 补0后的结果
 */
function pad(num, n = 2) {
    let zero, res;
    for (let i = 0; i < n; i++) {
        zero += '0';
    }
    res = zero + String(num)
    return res.slice(-n);
}