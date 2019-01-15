/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    if(typeof(n)===typeof(5)){
        n = Math.trunc(n);
    }
    if(n>0){
        let current = 1;
        let previous = 0;
        for (let counter = 0; counter < n-1; counter++) {
            let pass = current;
            current+=previous;
            previous=pass;
        }
        return current;
    }else if(n<1){
        return 0;
    }else{
        return NaN;
    }
}

console.log(fib("a"));
console.log(fib(-1));
console.log(fib(0));
console.log(fib("10"));
console.log("---------------------");
let fibSeq = "Fibbonachi";
let length = 100;
for (let index = 1; index < length+1; index++) {
    fibSeq+="\n";
    fibSeq+=index;
    fibSeq+="\t";
    fibSeq+=fib(index);
}
console.log(fibSeq);