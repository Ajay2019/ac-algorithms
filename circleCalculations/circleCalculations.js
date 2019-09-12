//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 

// Given the radius from the 




function circleCalculation (radius) {
	var area;
	var perimeter;

	area=Math.round(Math.PI *Math.pow(radius,2));
	perimeter= Math.round(2 * Math.PI * radius);
	return("The area of the circle is" + area + " and the perimeter of the circle is" + perimeter);

 }
var show=circleCalculation(10);
console.log(show);