/*
ECMAScript 3 版本的Function.bind()方法
 */
if(!Function.prototype.bind){
    Function.prototype.bind = function(o /*,args */){
        var self = this, boundArgs = arguments;

        //bind()方法的返回值是一个函数
        return function(){
            //创建一个实参列表，将传入bind()的第二个及后续的实参都传入这个函数
            var args = [], i;
            for(i = 0; i < boundArgs.length; i++) args.push(boundArgs[i]);
            for(i = 0; i < arguments.length; i++) args.push(arguments[i]);

            return self.apply(o, args);
        }
    }
}
