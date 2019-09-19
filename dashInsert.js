/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert("454793");
console.log(result) // "4547-9-3"

var result = dashInsert("44");
console.log(result) // "44"

var result = dashInsert("0");
console.log(result) // "0"

var result = isBigger("13");
console.log(result) // "1-3"

**/

//create a variable to store the output of the string
//create a variable to store the transformation of the number first to a string and then to an array

function dashInsert(str) {
	var output="";
	var array=num.toString().split("");
	for(var i=0;i<array.length;i++){
		if(array[i]%2 === 1 && array[i+1] % 2 === 1){
             output=output + array[i] + "-";
		} else{
			output=output+ array[i];
		}
	}
}