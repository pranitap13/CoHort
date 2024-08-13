/*The TextDecoder is optimized for converting byte arrays to strings, especially for large arrays or streams of data.*/
/* Using TextDecoder makes the code more concise and easier to understand, as it abstracts the process of converting bytes to characters.*/

function bytesToAscii(byteArray){
    return new TextDecoder().decode(byteArray);
}
/*TextDecoder is a built-in JavaScript class that provides a way to decode a stream of bytes into a string.
When you create a new TextDecoder() instance without any arguments, it defaults to using UTF-8 encoding. */
/*The decode method of the TextDecoder instance takes a Uint8Array (or any other array of bytes) as its argument.
This method decodes the byte array into a string based on the specified encoding (UTF-8 by default).
Each byte in the Uint8Array is interpreted as a character code, and the corresponding character is added to the resulting string.*/

const bytes = new Uint8Array([72, 101, 108, 108,  111]);
const asciiString = bytesToAscii(bytes);
console.log(asciiString);