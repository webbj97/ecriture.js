/*
 * @desc:
 * @Author: 余光
 * @Email: webbj97@163.com
 * @Date: 2020-09-10 10:14:43
 */

/**
 * 记录元素进入可是区域
 *
 * @export:
 * @param {String} dom 节点选择器
 * @param {Number} proportion 进入可是区域比例
 * @return {Boolean} 是否进入可是区域
 */
function domHeight(dom, proportion) {
    const prop = typeof proportion !== "number" ? 1 : proportion; // 强制数字类型
    const oDom = document.querySelector(dom);

    const winH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //可视区域高度
    const scrTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; //当前滚动的距离
    const domOffTop = oDom.offset().top; //距离页面顶部的距离
    const domH = oDom.height(); //自身高度

    // 元素距离顶部的距离 + 本身的高度 - 滚动条的距离 = 元素距离可视区域顶部的距离
    const res = ((scrTop + winH) - (domOffTop + domH * proportion)) >= 0; // 证明1/2 dom元素进入可视区域
    return res;
}