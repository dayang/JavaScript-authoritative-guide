/*
定义了一个扩展函数，用来将第二个以及后续参数复制至第一个参数
处理了IE bug：在多数IE版本中
若果o的属性拥有一个不可枚举的同名属性，则for/in循环
不会枚举对象o的可枚举属性，也就是说，将不会正确地处理诸如toString的属性
 */
var extend = (function(){
    //在修复之前，首先检测是否存在bug
    for(var p in {toString: null}){
        return function extend(o){
            //for/in 循环正确工作
            for(var i = 1; i< arguments.length; i++){
                var source = arguments[i];
                for(var prop in source) o[prop] = source[prop];
            }
            return o;
        };
    }

    //说明for/in循环不会枚举测试对象的toString属性
    //这个函数显示测试
    //Object.prototype中的不可枚举属性
    return function patched_extend(o){
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var prop in source) o[prop] = source[prop];

            for(var j = 0; j < protoprops.length; j++){
                prop = protoprops[j];
                if(source.hasOwnProperty(prop)) o[prop] = source[prop];
            }
        }
        return o;
    };

    var protoprops = ["toString", "valueOf", "constructor", "hasOwnProperty",
    "isPrototypeOf","propertyIsEnumerable","toLocalString"];
}());