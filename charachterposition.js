var aString = "Lighthouse in the house";


function countLetters(input) {
var letterCounts = {};
  // TODO update the returnValue so that it is correct
  // Maybe loop through each letter?
  for (var i = 0; i < input.length; i++) {
    var eachLetter = aString[i];
    // console.log(letterCounts)
    var letter = input[i];

    if (letter === ' ')  {
      continue;
    }
    if (!letterCounts[letter]) {
      letterCounts[letter] = i;
    } else {
      letterCounts[letter] = letterCounts[letter] + ', ' + i;
    }

  }
  return letterCounts;
}

var result = countLetters(aString);

console.log(result)
