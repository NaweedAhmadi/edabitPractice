// Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// Examples
// charCount("a", "edabit") ➞ 1
// charCount("c", "Chamber of secrets") ➞ 1
// charCount("b", "big fat bubble") ➞ 4

function charCount(str1, str2) {
    let totalChar = 0;
    for(let i = 0; i < str2.length; i++) {
        if(str2[i] == str1) {
            totalChar += 1;
        }
    }
    console.log(totalChar);
}

charCount("a", "edabit");