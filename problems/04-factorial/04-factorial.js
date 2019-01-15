/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
  if(isNaN(sumNum)||sumNum<0){
      return NaN;
  }
  sumNum = Math.trunc(sumNum);
  if(sumNum===0||sumNum===1){
      return 1;
  }
  let factValue = 1;
  for (let index = 2; index < sumNum+1; index++) {
      factValue*=index;
  }
  return factValue;
}

//TestCode
for (let index = 0; index < 11; index++) {
    console.log(factorial(index));
}