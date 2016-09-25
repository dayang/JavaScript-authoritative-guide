function factorial(n){
    if(isFinite(n) && n > 0 && n == Math.round(n)){
        if(!(n in factorial)){
            factorial[n] = factorial(n-1) * n;
        }
        return factorial[n];
    }else{
        return NaN;
    }
}
factorial[1] = 1;

console.log(factorial(5));