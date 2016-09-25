/*
获取对象的类名。可以用来进行参数类型的判断，如判断数组等
 */
function classOf(o){
    if(o === null) return "Null";
    if(o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
}

var isArray = Function.isArray || function(o){
    return typeof o === "object" &&
            Object.prototype.toString.call(o) === "[object Array]";
    };

function isArrayLike(o){
    return !!(o && typeof o === "object" &&
    isFinite(o.length) &&
    o.length >= 0 &&
    o.length === Math.floor(o.length) &&
    o.length < 4294967296);
}
console.log(classOf([1,2]));
console.log(classOf({}));
console.log(classOf(new Date()));
console.log(classOf(parseInt));
console.log(classOf(1));

