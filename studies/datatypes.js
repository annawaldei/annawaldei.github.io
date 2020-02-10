/*Number
	A numeric data type
		Any numerical value (positive, negative, or even a decimal point)
		You can add, subtract, multiply, and divide (like regular numbers)
*/
var myNum  =  5;  //  Regular Number
		
		myNum  =  1.5;  //  Decimal Number
		
		myNum  =  4 + 5;  //  Mathematical Expression
		
/*String
	Represents a sequence of characters enclosed with quotes (' ', " ")
	You can use bracket notation([]) to access individual characters in the string 
	Can be combined using the + operator
	*/
		// Addition Operator
		var wholeName = firstName + lastName;
		console.log(wholeName);
//	 length property that returns the total number of characters the string contains
		// Length Property
		console.log(wholeName.length);
	 
	//Declare a first name variable
	var firstName;
	// Declare a last name variable
	var lastName;
	// Assign the first name variable a string of my first name
	firstName = 'Anna';
	// Assign the last name variable a string of my last name
	lastName = "Waldei";
	// OR
	var firstName = 'Anna';
	var lastName = "Waldei";
		

/* Boolean
	A condition that values either true or false (similar to on/off switches)
	Typically used in if-elseif-else statements and for loops
	Can be created with boolean expressions using comparison operators
*/
        var myBool = true;  //  Boolean Value
		myBool = false;  //  Boolean Value
		myBool = 1 === 1;  //  Comparison
		
 /* Array
	Used to store multiple values in a variable
	Array literal var a = [];
	Arrays may contain other datatypes such as strings, booleans, numbers, functions, objects, and other arrays
	You can access the values of an array by referring to an index number 
		Indexes start at 0
			Every value in the list has an index- the number position of the value in the list
	Array methods remove and add elements
		Pop: removes a value from the end
			.pop()
		Push: adds a value to the end
			.push()
		Shift: removes a value to the front
			.shift()
		Unshift: adds a value to the front 
			.unshift()
	You use the length property of an array to return the length  of the array (the number of array elements)
*/
// declare a variable named myArray
	var myArray;
	// assign myArray to an array literal and add elements
	myArray = [7, "girl", false, 28, true, "mango"];
	//console log the length of the array
	console.log(myArray.length);
	// console log the first element inside of myArray
	console.log(myArray[0]);
	// add an element to the end of my array
	myArray.push("green");
	console.log(myArray);
	// add an element to the front of my array
	myArray.unshift("hello");
	console.log(myArray);
	// remove last element from my array
	myArray.pop();
	console.log(myArray);
	// remove first element from my array
	myArray.shift();
	console.log(myArray);
	
/* Object
	A collection of data relating to a single object/identify stored in curly braces {}
	Can contain references to any other data type (strings, numbers, arrays, functions, and other objects)
	values are stored at keys in objects.
		Key/value pairs - a pair of keys or values in an objects (keys are always going to be a string)
		Properties refer to key/value pairs
		Every value has a corresponding key 
		
			var myObject = {key1: 'a', key2: 'b'};  
	Unlike Arrays, Objects do not have a length property
	Similar to Arrays, objects can grown indefinitely 
	You can access keys in an object using both bracket and dot notation
*/
var object = {'firstName': 'Anna',
		 'lastName': 'Waldei'};
		
		console.log(object['firstName']);
		
		console.log(object.lastName); 
		
		
/* Function
	Reusable blocks of code that accepts inputs, process those inputs and returns a new data value
	four parts to a function declaration
		Name
		Parameters/arguments
		Function body
		Return statements
			function name(parameter) {
				function body
				function body
				return statement 
				}
	Functions optionally take parameters and arguments
		Parameters are just placeholders
			(Parameters are just like variable in a math equation)
	Functions optionally have a return statements 
		Return statements can only be used in a function body
		Return statements inside a function body returns a value or data
		Returning the function and consoling logging the function are not the same (Console.log does not return, giving you undefined)
	We call a function by its name, followed by parenthesis 
		Calling a function- runs the code in the function body
		Calling functions is not the same as defining a function
		name(arguments)
*/		
/* Undefined
	A variable that has been declared, but has not been assigned a value
		Var a; (this would be considered an undefined variable)
 */
 /* Null
	Something that does not exist.  (No value at all)
	Null is an object.
*/
/*NaN
	"Not-a-Number" 
*/
/*Infinity and -Infinity (Google them if you don't know!)
	Infinity: numeric value representing infinity
		A property of the global object
		Is greater than any other number
			Any + num multiplied by equals
			Any + num divided by equals 0
	-Infinity: 
*/
//What is the difference between primitive/simple and complex data types?
//Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
