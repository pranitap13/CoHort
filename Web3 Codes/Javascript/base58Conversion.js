/*first install:npm install base-x

to run code:node base58Conversion.js
*/
 
// Import the base-x library
const baseX = require('base-x');

// Define the Base58 alphabet
const BASE58_ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

// Create a Base58 encoder/decoder
const base58 = baseX(BASE58_ALPHABET);

// Create a Uint8Array
const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);

// Convert Uint8Array to Buffer (Node.js)
const buffer = Buffer.from(uint8Array);

// Encode the Buffer to Base58
const base58Encoded = base58.encode(buffer);

// Log the Base58 encoded string
console.log(base58Encoded);
