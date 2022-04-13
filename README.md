# Decoder Ring


https://jacksondynamics.github.io/Decoder_Ring/


## Description

A decoder application that uses three encrypting and decrypting methods: Caesar, Polybius, and Substitution.

## Caesar Cipher

![Caesar](/Caesar.png)
<br />
<br />
The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order. For example, if you were to "shift" the alphabet to the right by 3, the letter "A" would become "D".
```"thinkful" -> "wklqnixo"```
When decoding the message, you need to know the number the original message was shifted by so that you can shift in the opposite direction.
<br />
<br />

## Polybius Square Cipher

![Polybius](/Polybius.png)
<br />
<br />
The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the above table, the letter "B" would be represented by the numerical pair "21".
Typically, it is possible to arrange the letters however you like and read off the coordinates in whatever direction you like. In this example, the grid will be arranged as above and coordinates will be read by comparing the first digit to the number on the top of the table and the second digit to that on the left.
"thinkful" -> "4432423352125413"
When decoding the message, each pair of numbers is translated using the coordinates.
<br />
<br />

## Substitution Cipher

![Substitution](/Substitution.png)
<br />
<br />
The Substitution Cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.
For example, in the image above, the word "HELLO" would be translated as follows:
-"H" becomes "R".
-"E" becomes "M".
-"L" becomes "W".
-"O" becomes "L".
This would result in the code "RMWWL". To decrypt this code, you would simply take the result and transpose back from the substitution alphabet to the standard alphabet.
<br />
<br />
