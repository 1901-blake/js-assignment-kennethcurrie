/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
  return someNum/2 == Math.trunc(someNum/2);
}

//TestCode
for (let index = 0; index < 11; index++) {
    console.log(index+":\t"+isEven(index));   
}