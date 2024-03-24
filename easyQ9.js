// Convert a Number to Base-2
// Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.

// Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

// Examples
// binary(1) ➞ "1"
// // 1*1 = 1

// binary(5) ➞ "101"
// // 1*1 + 1*4 = 5

// binary(10) ➞ "1010"
// // 1*2 + 1*8 = 10

var newBinaryNumber = '';

function convertNumber(number) {
    var binaryNumbers = [1024, 512, 64, 32, 16, 8, 4, 2, 1];
    for (var i = 0; i <= 8; i++) {
        if(number >= binaryNumbers[i]) {
            newBinaryNumber += '1';
            number -= binaryNumbers[i];
        } else {
            newBinaryNumber += '0';
        }
    } 
    console.log(parseInt(newBinaryNumber));
}

convertNumber(23);