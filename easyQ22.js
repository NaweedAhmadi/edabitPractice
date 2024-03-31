// Find the Amount of Potatoes
// Create a function to return the amount of potatoes there are in a string.

// Examples

// potatoes("potato") ➞ 1
// potatoes("potatopotato") ➞ 2
// potatoes("potatoapple") ➞ 1

function potatoes(str) {
    const pattern = /potato/gi;

    const matches = str.match(pattern);
    const numOfPotatoes = matches.length;
    console.log(numOfPotatoes);
}

potatoes("potatoapple");