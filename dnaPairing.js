//Code Your DNA!

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2nd array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
//Input is a string and output is a nested array 
// We need the split and push to seperate and push the new array 
//Everytiime the loop runs, it needs to push the new paired element into the new array



function pairElement(str) {
  var array=str.split('');// Splitting the input 
   console.log(array);// to check if the split is correct
  var newArray=[];//For pushing the new array and return
 
  for(i=0;i<array.length;i++){
    if(array[i]==="G"){
      newArray.push(["G","C"]);
    }
    else if(array[i]==="A"){
      newArray.push(["A","T"]);
    }
    else if(array[i]==="T"){
      newArray.push(["T","A"]);
    }
    else{
      newArray.push(["C","G"])
    }
  }
   
 return newArray;
   
 }
 
 var final = pairElement("GCG");
 console.log(final);

//TEST CASES
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]