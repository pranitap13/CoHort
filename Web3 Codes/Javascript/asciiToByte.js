function asciiToBytes(asciiString){

    const arr = []; //A constant array arr is declared to store the byte values of each character in the ASCII string.
    for(let i = 0; i < asciiString.length; i++)/*A for loop is started. The loop will iterate over each character in the 
    asciiString. The loop variable i starts at 0 and increments by 1 in each iteration until it reaches the length of the
     string (asciiString.length). */
     {
        arr.push(asciiString.charCodeAt(i)); /*Inside the loop, the charCodeAt(i) method is called on asciiString. 
        This method returns the ASCII (or Unicode) value of the character at position i in the string. This value is then
         pushed into the arr array.*/
    }
    return new Uint8Array(arr); /*The function returns a Uint8Array (an array of 8-bit unsigned integers) constructed from the arr array. 
    This Uint8Array represents the byte values of the ASCII characters from the original string.*/
    
}

const ascii = "Pranita";
const byteArray = asciiToBytes(ascii);
console.log(byteArray);