/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.

Assumtion of meaning for splice: remove that specific element
*/
function spliceElement(someArr, index) {
  if (isNaN(index)) {
    console.log("Index must be a number");
    return someArr;
  }
  if (index>someArr.length-1){
    console.log("Index must be contained within array");
    return someArr;
  }
  index = Math.trunc(index);
  if (someArr.constructor === Array) {
    let newArray = [] ;
    someArr.forEach((element, I) => {
       if (I===index){
         console.log("Spliced out "+someArr[index]);
       }else{
         newArray.push(element);
       }
    });
    return newArray;
  }else{
    console.log("Array must be provided to splice");
    return someArr;
  }
  //replicate the splice function
  //remove that item
}

//TestCode
console.log(spliceElement([0,1,2,3,4,5,6,7,8,9],5));
