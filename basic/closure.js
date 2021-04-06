function a(){
    let num = 1;
    return function b(){
        console.log(num++)
    }
}

const closure = function a();

// closure.[[scope]] = [
//     Closure (a): {name: 1}
// ]

/*




    “
Copyright 笔趣阁*/