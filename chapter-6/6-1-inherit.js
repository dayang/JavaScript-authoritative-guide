// inherit() 返回了一个继承自原型对象p的属性的新对象
// 这里使用了ECMAScript 5中的Object.create() 函数(如果存在的话)
// 如果不存在，退化使用其他方法

//inherit() 的另一个作用时防止库函数无意间修改那些不受你控制的对象
// var o = {x : "don't change this value"}
// library_function(inherit(o));
function inherit(p){
    if(p == null) throw TypeError();
    if(Object.create) {
        return Object.create(p);
    }

    var t = typeof p;
    if( t !== "object" || t !== "function") throw TypeError();
    function f() {}
    f.prototype = p;
    return new f();
}

var a = inherit({x: 2, y: "good morning"});
console.log(a.hasOwnProperty("x"));
console.log(a.x, a.y);
