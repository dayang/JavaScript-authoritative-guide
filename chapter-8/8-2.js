function add(x, y) {return x + y;}
function substract(x, y) {return x - y;}
function multiply(x, y) {return x * y;}
function divide(x, y) {return x / y;}

function operate(operator, operand1, operand2){
    return operator(operand1, operand2);
}

var i = operate(add, operate(add, 2,3),operate(multiply, 4, 5));
console.log(i);

var operators = {
    add : function(x ,y) {return x + y;},
    substract: function(x, y) {return x - y;},
    multiply: function(x, y) {return x * y;},
    divide: function(x, y) {return x / y;},
    pow: Math.pow
};

function operate2(operation, operand1, operand2){
    if(typeof operators[operation] === "function"){
        return operators[operation](operand1, operand2);
    }else throw "unknown operator";
}

var j = operate2("add", "hello", operate2("add", " ", "world"));
console.log(j);
var k = operate2("pow",10 ,3);
console.log(k);