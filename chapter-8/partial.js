//将类数组对象转换为真正的数组
function array(a, n) {
    return Array.prototype.slice.call(a, n || 0);
}

// 这个函数的实参传递至左侧
function partialLeft(f){
    var args = arguments;
    return function(){
        var a = array(args,1);
        a = a.concat(array(arguments));
        return f.apply(this, a);
    }
}
//这个函数的实参传递至右侧
function partialRight(f){
    var args = arguments;
    return function(){
        var a = array(arguments);
        a = a.concat(array(args, 1));
        return f.apply(this, a);
    }
}

//这个函数的实参被用作模板
//实参列表中的undefined值都被填充
function partial(f){
    var args = arguments;
    return function(){
        var a = array(args, 1);
        var i = 0, j = 0;
        for(; i < a.length; i++){
            if(a[i] === undefined){
                a[i] = arguments[j++];
            }
        }
        a = a.concat(array(arguments, j));
        return f.apply(this, a);
    };
}

//这个函数带有三个参数
var f = function(x, y, z){
    return x * ( y - z);
};

console.log(partialLeft(f,2)(3,4)); // 2*(3-4) = -2
console.log(partialRight(f,2)(3,4)); // 3*(4-2) = 6
console.log(partial(f,undefined,2)(3,4)); // 3*(2-4) = -6