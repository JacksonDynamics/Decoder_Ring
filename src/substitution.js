// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6




const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    input = input.toLowerCase()
    if(!input || !alphabet || alphabet.length !=26) return false

    for (let i=0; i<alphabet.length; i++) {
        if ( alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i]) ) {
          return false; // repeats
        }

    const mainAlphabet = "abcdefghijklmnopqrstuvwxyz "  
    const givenAlphabet = [...alphabet, " "]   
    const translation = []
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        translation.push(givenAlphabet[mainAlphabet.indexOf(input[i])])
      }
    } else {
      for (let i = 0; i < input.length; i++) {
        translation.push(mainAlphabet[givenAlphabet.indexOf(input[i])])
      }
    }
    return translation.join("")

    }  
  }





  //substitution("hello", 'xoyqmcgrukswaflnthdjpzibev')



  return {
    substitution,
  };
})();



module.exports = { substitution: substitutionModule.substitution };
