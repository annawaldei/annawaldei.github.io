/* If: uses if to check for a specific condition 
	Runs code wrapped in curly braces
	Will always result into a boolean value  
	Condition being check must be in parenthesis
 	
	if (some condition here ) { 
	// run some code here if condition is true 
	console.log('this code ran!');
	} 
	
*/	
/* Else-if
	New condition to test, if first (if) is false.
*/
/* Else: sets default 
	No condition to check 
	Only runs if other conditions are false
	*/
	function test(grade){
	if(grade === 100){
	console.log("Green");
	} else if(grade <= 99 && grade >= 70){
	console.log("Yellow");
	} else if(grade <= 69 & grade >= 70){
	console.log("Red");
	} else
	console.log("No Attempt");
	}
/* Switch
	Selects one of many code blocks to be executed.
		Evaluated once
		Value of expression compared with the value of each case
		Associated code block is executed if there is a match.
		switch(expression) {
		  case x:
		    // code block
		    break;
		  case y:
		    // code block
		    break;
		  default:
		    // code block
		}
*/		
		var aws = 768;
		var kpi = [];
		switch (kpi) {
    // If score is greater than or equal to 899
    case kpi >= 899:
		var anna  ={
        "message": "Alright",
       };     
		break;
// If score is 80 or greater
    case kpi >= 80:
		var  anna = {
            "message": "OK",
            "cssClass": ".ok-state"
        };     
		break;
// If score is 70 or greater
    case kpi >= 70:
		var anna = {
            "message": "Poor",
            "cssClass": ".poor-state"
        };     
		
		}		