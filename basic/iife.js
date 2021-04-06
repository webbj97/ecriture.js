// (function(){
//     console.log('立即函数-普通函数-this:', this)
// })();

((x, y)=>{
    console.log('add(x, 6)', x + y);
})(5, 6);

function a(){}(1)