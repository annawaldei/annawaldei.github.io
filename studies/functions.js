	// The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by?
/*	What’s the difference between a function’s parameters and arguments PASSED to a function?
		A parameter is a variable in the declaration of the function 
		An argument is the actual value of the variable getting passed 
*/
/*What’s the syntax for a NAMED function?
		function name(parameter) {
			function body
			function body
			return statement 
			}
*/
/* How do we assign a function to a variable?
		There are two ways to assign a function to a variable:
			Var functionName = function (){
			};
			Function functionName1(){
			};
*/
//Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
/*	Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
		Variables can be used in child scopes, but cannot be used in the parent scope
		Functions create their own scope
*/
/*Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! (See: our meeting-room app for an example!)
		A function with the access to the parent scope, even after the parent function has closed
        A function using variables from a parent scope
        */