

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();

const stack = []
stack.push("checkscope");
stack.push("f");
stack.pop();
stack.pop();

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();

const stack = []
stack.push("checkscope");
stack.pop();
stack.push("f");
stack.pop();
