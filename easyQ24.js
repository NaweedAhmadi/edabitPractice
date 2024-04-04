// Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// Examples

// charCount("a", "edabit") ➞ 1
// charCount("c", "Chamber of secrets") ➞ 1
// charCount("b", "big fat bubble") ➞ 4

// Notes
// Your output must be case-sensitive (see second example).

function charCount(str1, str2) {
    let counter = 0;
    let str2Array = str2.toString().split('');
    for (let i = 0; i < str2Array.length; i++) {
        if (str1 == str2Array[i]) {
            counter++;
        }
    }
    console.log(counter);
}

charCount("b", "big fat bubble");