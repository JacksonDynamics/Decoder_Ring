// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here

    // Error Testing:  should return false if the shift amount is 0
    // Should return false if the shift amount is above 25
    // Should return false if the shift amount is less than -25
    if (shift==0||shift > 25||shift <= -25) {
      return false;
    }

    // Decoding is simply the opposite of shift.  Aka, -shift
    if (!encode) {
      shift = shift * -1;
    }

    // Create Var's' for the ASCII values of lowercase 'a' (97) and 'z' (122)
    const a_Code = 'a'.charCodeAt();
    const z_Code = 'z'.charCodeAt();
    // Create Var for ASCII vaule for the size of alphabet (26)
    const ALPHABET = z_Code - a_Code + 1;

    // Create empty array and new var of our input to be just lowercase
    let newString = []
    let newInput = input.toLowerCase()

    // Loop through each char of the input string and changes 
    // each of the char in the string to the ASCII number
    for (let i = 0; i < input.length; i++) {
      const code = newInput.charCodeAt(i);

      // if the new ASCII code of that char falls between 'a' (#97) and 'z' (#112)
      if (code >= a_Code && code <= z_Code) {
        
        // New code var represents the new ASCII after the shift
        let newCode = code + shift;

        // Edge case when going past 'z' (ASCII #122)
        if (newCode > z_Code) 
          // We subtract the Alphabet amount of 26 from the ASCII 
          // to begin shift back at the start of the alphabet
          newCode -= ALPHABET;
        
        // Edge case when going below 'a' (ASCII #97)
        if (newCode < a_Code) 
          // We add the Alphabet amount of 26 to the ASCII 
          // to begin shift back at the end of the alphabet
          newCode += ALPHABET
      
        // We convert the new ASCII value back to string and push to []
        newString.push(String.fromCharCode(newCode));

        // If not a letter, push the original value of that char to the []
      } else {
          newString.push(input[i]);
      }
    }
    // Convert the [] value into a joined string 
    return newString.join('');  
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
