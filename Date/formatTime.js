/**
 * @name: 秒 => xx:xx格式
 * @param {number} interval 秒
 * @return {string} xx:xx
 */
function formatTime(interval) {
    const minute = pad(interval / 60 | 0);
    const second = pad(interval % 60);
    return `${minute}:${second}`
}
/**
 * @name: 补零
 * @msg:
 * @param {number} num 传入的数字
 * @param {number} n 补0的长度
 * @return {type}
 */
function pad(num, n = 2) {
    let zero, res;
    for (let i = 0; i < n; i++) {
        zero += '0';
    }
    res = zero + String(num)
    return res.slice(-n);
}

console.log(formatTime(65))