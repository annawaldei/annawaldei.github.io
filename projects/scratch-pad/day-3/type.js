// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // using an if statement and Array.isArray method, determine whether or not value is an array
    if(Array.isArray(value)){
         // return true if value is an arr
        return true;
        // otherwise return false
    } else {
        return false;
    }
   

    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // using an if statement detering whether a value is an object 
    // return false if value is an array using array.isarray
    if(Array.isArray(value)){
        return false;
        // return false if null, using strict comparison
    } else if(value === null){
        return false;
        // return fasle if a date, using instanceof
    }else if(value instanceof Date){
        return false;
        // using typeof, determine if value is an object, if so return true
    }else if(typeof value === 'object'){
        return true;
        // if none of the above return false
    }else {
        return false;
    }
   
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // using an if statement detering whether a value is an array and an object
    // return true if value is an array using array.isarray
    if(Array.isArray(value)){
        return true;
        // return false if null, using strict comparison
    } else if(value === null){
        return false;
        // return fasle if a date, using instanceof
    }else if(value instanceof Date){
        return false;
        // using typeof, determine if value is an object, if so return true
    }else if(typeof value === 'object'){
        return true;
        // otherwise return false
    }else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // use an if statement to determine the type of value
    // return the values as a string
    // array.isarray()
    // typeof
    // instanceof
    // string
    if (typeof value === 'string'){
        return 'string';
    // array
    } else if (Array.isArray(value)){
      return 'array';
    } else if (typeof value === 'undefined'){
        return 'undefined';
        // number
    } else if (typeof value === 'number'){
        return 'number';
         // boolean
    } else if (typeof value === 'boolean'){
        return 'boolean';
        // null
    } else if (value === null){
        return 'null';
         // object 
        //function
    } else if (typeof value === 'function'){
        return 'function';
        // date 
    } else if (value instanceof Date){
        return 'date';
         // object 
    } else if(typeof value === 'object'){
        return 'object';
      
    } else {
        
    }
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
