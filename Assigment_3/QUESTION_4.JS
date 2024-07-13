const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string (minimum 20 characters): ', (inputString) => {
  function isVowel(char) {
      return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
  }

  let vowelCount = 0;
  let consonantCount = 0;

  for (let i = 0; i < inputString.length; i++) {
      let char = inputString[i];

      if (/[a-zA-Z]/.test(char)) {
          if (isVowel(char)) {
              vowelCount++;
          } else {
              consonantCount++;
          }
      }
  }

  console.log("Number of vowels:", vowelCount);
  console.log("Number of consonants:", consonantCount);

  rl.close();
});