// write a function that returns the number of vowels used in a string.

// solution
// create a variable that keeps count of the number of vowels in the str.
// create a variable that stores the vowels
//loop over the string
// Do a check using includes to see if the letters in the str matches the ones in the vowels variable. if it matches increment the count by one.

function vowels(str) {
  var count = 0;
  var vow = ['a', 'e', 'i', 'o', 'u'];
  // for (var i = 0; i < str.length; i++)
  for (let char of str.toLowerCase()) {
    if (vow.includes(char)) {
      count++;
    }
    return count;
  }
}
