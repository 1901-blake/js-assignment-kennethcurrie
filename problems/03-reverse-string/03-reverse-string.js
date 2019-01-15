/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  if(typeof(someStr)===typeof("TestString")){
      let newString = someStr.charAt(someStr.length-1);
      for (let index = someStr.length-2; index > -1; index--) {
          newString=newString.concat(someStr.charAt(index));
      }
      return newString;
  }else{
      console.log("Not a String.");
      return someStr;
  }
}

//TestCode
console.log(reverseStr("Hello World!"));
console.log(reverseStr(100));