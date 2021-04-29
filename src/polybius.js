
// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (() => {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    
    // Create an array of objects that represent the table
    const encodedTable =
      {'a':'11', 'b':'21', 'c':'31', 'd':'41', 'e':'51', 'f':'12',
      'g':'22', 'h':'32', 'i':'42', 'j':'42', 'k':'52', 'l':'13', 
      'm':'23','n':'33', 'o':'43', 'p':'53', 'q':'14', 'r':'24', 
      's':'34','t':'44', 'u':'54', 'v':'15', 'w':'25', 'x':'35', 
      'y':'45','z':'55'}
      
      const decodedTable = 
      {'11':'a', '21':'b', '31':'c', '41':'d', '51':'e', '12':'f',
      '22':'g', '32':'h', '42':'i/j', '52':'k', '13':'l', '23':'m',
      '33':'n', '43':'o', '53':'p', '14':'q', '24':'r', '34':'s',
      '44':'t', '54':'u', '15':'v', '25':'w', '35':'x', '45':'y',
      '55':'z'}

    
    // Create an empty array to push our results into
    const newEncode=[]
    // Change all letter inputs to lowercase for ease of use
    const newInput=input.toLowerCase()
    
   // Work on the encoding section first.  If encode is true...
    if(encode) {
      // Create a new array with each char separated from the string
      const char=newInput.split('')
      // Loop through each char in the []
      for (let i=0; i < char.length; i++) {
        
        let encodedChar=encodedTable[char[i]]
          if(char[i] === ' ') {
            newEncode.push(' ')
          }
          newEncode.push(encodedChar) 
      }
      return newEncode.join('')
    }
    
    if (input.split(" ").join("").length % 2 != 0) return false
    
    //establish empty array
    const decodedArray = [];
    for (let i =0; i < input.length; i++) {
      let temp = input.charAt(i);
      if (temp == " ") {
         decodedArray.push(" ")
        } else {
          temp+= input.charAt(i+1)
          let decodedNum=decodedTable[temp]
          decodedArray.push(decodedNum)
          i++       
      }
    }
      return (decodedArray.join(""))    
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
