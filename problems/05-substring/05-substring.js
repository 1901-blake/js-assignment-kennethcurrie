/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    if(isNaN(startIndex)||isNaN(endIndex)){
        console.log("Both Start and End values need to be numbers.");
        return(someStr);
    }
    startIndex = Math.trunc(startIndex);
    endIndex = Math.trunc(endIndex);
    if(endIndex<=startIndex){
        console.log("Start value must be smaller than End value.");
        return(someStr);
    }
    
    if(typeof(someStr)===typeof("TestString")){
        if(endIndex>someStr.length||startIndex>someStr.length){
            console.log("Indices need to be smaller than length of string.");
            return(someStr);
        }
        someStr = trim(someStr,someStr.length-endIndex);
        someStr = trim(someStr,0-startIndex);
        return someStr;
    }else{
        console.log("String value required to create substring.");
        return(someStr);
    }
}
function trim(splitStr,cut){
    splitStr = splitStr.toString();
    cut=Math.trunc(cut);
    let newString = splitStr.split("");
    let reverse = false;
    if(cut<0){
        newString = newString.reverse();
        reverse =  true;
        cut = Math.abs(cut);
    }
    newString.splice(newString.length-cut,newString.length);
    if(reverse){
        newString = newString.reverse();
    }
    return newString.join("");
}

//TestCode
console.log(substring("1234567890",1,3));
console.log(substring("hello",0,3));