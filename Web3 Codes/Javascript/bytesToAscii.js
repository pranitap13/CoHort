function bytesToAscii(byteArray) {
    const arr = [];
    for(let i = 0; i < byteArray.length; i++) {
        arr.push(String.fromCharCode(byteArray[i])); //String.fromCharCode(byteArray[i]) converts each byte to its corresponding ASCII character.
    }
    return arr.join(''); // Returns a single string from the array of characters
    //arr.join('') concatenates the characters into a single string
}

let byteArray = new Uint8Array([50, 72, 100, 250, 65]);
let conversion = bytesToAscii(byteArray);
console.log(conversion);
