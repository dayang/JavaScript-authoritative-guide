//常用函数的实现

var MAX_SAFE_INTEGER = 9007199254740991;
var MAX_ARRAY_LENGTH = 4294967295;

function isObject(value){
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}

function isObjectLike(value){
    return value != null && typeof value == 'object';
}

function isFunction(value){
    var tag = isObject(value) ? Object.prototype.toString.call(value) : '';
    return tag == '[object Function]';
}

function isLength(value){
    return typeof value == 'number' &&
            value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isArray = Function.isArray || function(value){
    return typeof value == 'object' &&
            Object.prototype.toString.call(value) == '[object Array]';
    };

function isArrayLike(value){
    return value != null && isLength(value.length) && !isFunction(value);
}

function isArrayLikeObject(value){
    return isObjectLike(value) && isArrayLike(value);
}