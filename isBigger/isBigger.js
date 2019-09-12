/*
Given two numbers, a, b, as inputs, return true if a > b,
return false if a < b, return 0 otherwise.

Bonus 1: If a or b is undefined or not a number, then return -1.
Hint: Chekout typeof() operator at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

*/

/**
Examples:

var result = isBigger(3,4);
console.log(result) // false

var result = isBigger(13,4);
console.log(result) // true

var result = isBigger(4.00001,4);
console.log(result) // true

var result = isBigger(4,4);
console.log(result) // 0

var result = isBigger("potato",4);
console.log(result) // -1

var result = isBigger("4",4);
console.log(result) // -1

var result = isBigger(3);
console.log(result) // -1

var result = isBigger();
console.log(result) // -1

**/

// Input is 2 number a, b
// Output :either a boolean,0,-1 depending on the calculation
// step1: We need to test if a > b then return true
//step 2: Return false if b<a then return false
//step 3: if a=b then return 0
// step 4: Create a condition that tests to see if a and b are numbers and return -1 if they are not and if they are numbers than test the below conditions
//Using the typeof operator 

var a;
var b;

function isBigger(a, b) {
	if(typeof(a)==="number" && typeof(b)==="number")
	{
		if(a>b){
			return true;
		}
		else if (b>a){
			return false;
		}
         else{
           return("0");
         }

	}
	else
	{
		return("-1");
	}

}

var display=isBigger("4",1);
console.log(display);

