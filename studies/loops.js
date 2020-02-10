
/*	Looping is used so that we can perform an action a specific number of times 
		While: allows code to be executed repeatedly based on a given boolean condition ( repeating if statement)

        While (boolean condition){ 
			Loop statements…
			};
*/
            var count = 6;
			while( count < 10){ 
				console.log(count); 
				count++;
			}
/*		For: consumes the initialization, condition and increment/decrement in one line 
			initialization -
				Marks the start of a loop
			Condition-
				Test the exit condition
				Must return a boolean value
			Increment/decrement-
				Updating the variable for next iteration
	*/		for (var i= 0; i<10; i++){
				console.log("Hello World!");
				}
	/*	For in: iterates a specific variable over all the enumerable properties of an object
			Key reference
			object
			for( var key in object){ 
				console.log(key);
				console.log(object[key]);
			}
*/
