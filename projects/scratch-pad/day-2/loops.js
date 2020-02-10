// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // using a for loop, iterate through the array
  // use .length prop
  for (var i = 0; i < array.length; i++){
    // print its values to console
    console.log(array[i]);
  }
  
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // iterate through an arr, in reverse using a for loop
  // use .length -1 prop
  for (var i = array.length -1; i >= 0; i--){
    console.log(array[i]);
  }
  // print values to console

  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //return an array of the object keys
  return Object.keys(object);
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // use a for in loop to iterate over an object 
  // print its keys to the console
  for (var key in object){
    console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
//
// create a var to store objects values
var aarray = [];
// use  a for in loop to iterate throuhg the obj
for (var key in object){
// use the .push method to call obj
  aarray.push(object[key]);
}


//  return an array of the obj values
return aarray;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // using a for in loop, loop over the object 
  for (var key in object){
      // print value to the console
    console.log(object[key]);
  }

  
  
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
 // create a var to store values 
 var myarr = [];
 // loop over every key in object with a for in loop
 // push key into var
 for (var key in object){
   myarr.push(key);
   
 }
 // return length of var
 return myarr.length;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // create an empty arr lit that will store objects keys 
  var newarr = [];
  
  //use a for in loop to iterate through an obj
  for (var key in object){
    newarr.push(object[key]);
  }
  // loop through the var, reversed, using a for loop
  
  for (var i = newarr.length-1; i >= 0; i--){
    // print values to console
    console.log(newarr[i]);
    
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
