function  type(o){
    var t, c, n;
    if(o === null) return "null";
    if(o !== o) return "nan";
    if((t = typeof o) !== "object") return t;
    if((c = classOf(o)) !== "Object") return c;
    if(o.constructor && typeof o.constructor === "function" &&
        (n = o.constructor.getName())) return n;
    return "Object";
}

function classOf(o){
    return Object.prototype.toString.call(o).slice(8,-1);
}

Function.prototype.getName = function(){
    if("name" in this) return this.name;
    return this.name = this.toString().match(/function\s*([^(]*)\(/)[1];
};

console.log(type(Function));
console.log(type({}))