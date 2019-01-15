/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
  if(numArray.constructor === Array){
    numArray.forEach((element, index, tempArray) => {
        if(isNaN(element)){
          console.log("Not an array of numbers.");
          return numArray;
        }
        tempArray[index] = Number(element);
    });
    let sorted=true;
    do {
        sorted = true;
        let arrayCap = numArray.length -1
        numArray.forEach((element, index, tempArray) => {
            if(index<arrayCap){
                if(element>tempArray[index+1]){
                    sorted=false;
                    let tempValue = tempArray[index+1];
                    tempArray[index+1] = element;
                    tempArray[index] = tempValue;
                }
            }
        });
    } while (sorted===false);
    return numArray;
  }else{
        console.log("Not an array of numbers.");
        return numArray;
  }
}

//TestCode
let sortedArray = bubbleSort([8,5,4,7,3,6,"2",1,0,9,0xa])
console.log(sortedArray);