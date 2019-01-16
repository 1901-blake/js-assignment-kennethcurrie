/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
 //forin loop
    for (let key in someObj) {
        console.log(`${key}: ${someObj[key]}`);
    }
}

//TestCode
let car = {make:"Mustang", model:"Boss", mpg:18};
objectProperties(car);