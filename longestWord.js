//Find the Longest Word in a String

//Return the length of the longest word in the provided sentence.

//Your response should be a number.

//Here are some helpful links:

//String.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

//TEST CASES
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5.
// findLongestWord("Google do a barrel roll") should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.
// Input a string
//output a number
//We need to look at the length of each word, we ned

function findLongestWord(str) {
  var array=str.split(" ");
   var longword = array[0].length;
  for(i=0;i<array.length;i++){
    if(array[i].length > longword){
      longword=array[i].length;
    }
    
  }
  console.log(longword);
}

findLongestWord("AvanthiJandhyala hello");
findLongestWord("happy birthday");
