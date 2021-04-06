function curry(fn){
    const arg = [].slice.call(arguments, 1);
    return function(){
        const newArgs = arg.concat([].slice.call(arguments))
        return fn.apply(this, newArgs)
    }
}

function add(a, b){
    return a + b;
}



// var curry = fn =>
//     judge = (...args) =>
//         args.length === fn.length
//             ? fn(...args)
//             : (arg) => judge(...args, arg)
curry = (fn) => {
    return function judge(...args){
        if(args.length === fn.length){
            return fn(...args)
        }else{
            return (arg) => judge(...args, arg)
        }
    }
}

const func = curry(add)
let res = func(1, 2)(2)
console.log('res:', res);
// 柯里化

/*

师的相国寺住持的身份，竟然亲自跑来传话，不可谓不怪异，林晚荣上次已经被诱骗了吃过一次亏，自然是小心谨慎，强自压制住心中的激动，问道：“那请问大师，肖小姐她说了些什么？”



    徐芷晴微微一笑，道：“萧家妹妹，男女相悦，乃是天经地义的道理，不必过于羞涩。”






Copyright 笔趣阁*/