/*Conversion to Base64:

Buffer.from(Uint8Array) creates a Buffer instance that wraps around the binary data stored in the Uint8Array.
.toString("base64") is a method on the Buffer object that converts the binary data into a Base64-encoded string.
Base64 is a way of encoding binary data (like images, files, or in this case, byte arrays) into ASCII strings, making it easier to transmit over text-based protocols like HTTP or save in text files.*/
const myArray = new Uint8Array([72, 101, 108, 108, 111]);
/*Uint8Array is a typed array that holds raw binary data. However, to encode this binary data into a Base64 string, you need a mechanism that understands and can directly operate on this binary data. This is where Buffer comes in.*/
const base64Encoded = Buffer.from(myArray).toString("base64");
/*Buffer.from(Uint8Array) creates a Buffer object from the Uint8Array.
.toString("base64") converts the buffer to a Base64-encoded string.
Base64 encoding is a way to represent binary data in an ASCII string format. It's commonly used in data transfer over text-based protocols like HTTP.
Uint8Array by itself doesn't have a method to convert its data into a Base64 string. To do so, it needs to be wrapped in a Buffer, which provides the necessary encoding functions.*/
console.log(base64Encoded);
