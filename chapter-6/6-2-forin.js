/*
把p中的可枚举属性复制到o中，并返回o
如果o和p中含有同名属性，则覆盖o中的属性
逻辑正确，但不能弥补IE中的bug，8-3中更健壮的extend()
 */
function extend(o, p){
    for(var prop in p){
        o[prop] = p[prop];
    }
}

/*
将p中的可枚举属性复制到o中，并返回o
 */
function merge(o, p){
    for(var prop in p){
        if(o.hasOwnProperty(prop)) continue;
        o[prop] = p[prop];
    }
}

/*
如果o中的属性在p中没有同名属性，则从o中删除这个属性
 */
function restrict(o, p){
    for(var prop in o){
        if(!(prop in p)) delete o[prop];
    }
}

/*
如果o中的属性在p中存在同名属性，则从o中删除这个属性
 */
function substract(o, p) {
    for(var prop in p){
        delete o[prop];    //删除一个不存在的属性不会报错
    }
}

/*
返回一个新对象，这个对象同时拥有o的属性和p的属性
如果o和p中有同名的属性，使用p中的属性值
 */
function union(o, p){
    return extend(extend({}, o), p);
}

/*
返回一个新对象，这个对象拥有同时在o和p中出现的属性
但忽略p中的属性
 */
function intersection(o ,p){
    return restrict(extend({}, o), p);
}

/*
返回一个数组，包含o中可枚举的自有属性的名字
 */
function keys(o){
    if(typeof o !== "object") throw TypeError();
    var result = [];
    for(var prop in o){
        if(o.hasOwnProperty(prop)) {
            result.push(prop);
        }
    }
    return result;
}



