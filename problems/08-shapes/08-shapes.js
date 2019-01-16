/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  shape = shape.toLowerCase();
  if(isNaN(height)||height<1){
    console.log("height must be a positive integer")
    return NaN;
  }
  Math.trunc(height);
  character = character.substring(0,1);
  switch (shape) {
    case "triangle":
    for (let x = 0; x < height; x++) {
      let line = "";
      for (let y = 0; y < x+1; y++){
        line = line.concat(character);
      }
      console.log(line);
    }      
      break;
    case "square":
    for (let x = 0; x < height; x++) {
      let line = "";
      for (let y = 0; y < height; y++){
        line = line.concat(character);
      }
      console.log(line);
    }
      break;
    case "diamond":
    if(height%2===0){
      for(x=0; x<height; x+=2){
        let line ="";
        for(y=0; y<x+2; y++){
          line = line.concat(character);
        }
        console.log(pad(line,height));
      }
      for(x; x>0; x-=2){
        let line ="";
        for(y=0; y<x; y++){
          line = line.concat(character);
        }
        console.log(pad(line,height));
      }
    }else{
      for(x=-1; x<height; x+=2){
        let line ="";
        for(y=0; y<x+2; y++){
          line = line.concat(character);
        }
        console.log(pad(line,height));
      }
      x-=2;
      for(x; x>0; x-=2){
        let line ="";
        for(y=0; y<x; y++){
          line = line.concat(character);
        }
        console.log(pad(line,height));
      }
    }
      break;
    default:
    console.log("Invalid Shape");
      break;
  }
}
function pad(partial,length){
  let sidepad = (length-partial.length)/2
  if(sidepad<0){
    return partial;
  }
  for (let index = 0; index < sidepad; index++) {
    partial = " " + partial + " ";
  }
  return partial;
}

//TestCode
printShape("Square",3,"%");
console.log("------------------------------------");
printShape("Triangle",3,"$");
console.log("------------------------------------");
printShape("Diamond",9,"*");
console.log("------------------------------------");
printShape("Diamond",8,"*");