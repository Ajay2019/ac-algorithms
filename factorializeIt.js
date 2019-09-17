//Challenge time! 
//Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

//Input is a whole number
//output is a number which is the factorial and that is the output of multiplying the numbers
//Using a variable to store the output
//Checking if there is a method in js to do the factorial 
// Loop: we need to start at 1 and then end at the number that is the parameter



// Check out Arithmetic Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators


  function factorializeIt(num) {
  
 

      var n=1;
      
        for(i=1;i<=num;i++){
          
         n*=i;
         
        }
      return n;
    }
         
    
    var display=factorializeIt(4);
    console.log(display);
