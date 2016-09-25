// 返回f()的带有记忆功能的版本
// 只有当f()的实参的字符串表示都不相同时它才会工作
function memorize(f){
    var cache = {}; // 将值保存在闭内
    return function () {
        var key = arguments.length + Array.prototype.join.call(arguments,",");
        if(key in cache) return cache[key];
        else return cache[key] = f.apply(this, arguments);
    };
}

//返回两个整数的最大公约数
//使用欧几里得算法
function gcd(a, b){
    var t;
    if(a < b) t = b, b=a,a=t;
    while(b != 0) t = b,b=a%b,a=t;
    return a;
}

var gcddemo = memorize(gcd);
console.log(gcddemo(85, 187));

var factorial = memorize(function(n){
    return (n <= 1) ? 1 : n * factorial(n-1);
});

console.log(factorial(5));
