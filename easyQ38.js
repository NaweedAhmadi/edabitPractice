// Find the Amount of Potatoes
// Create a function to return the amount of potatoes there are in a string.

// Examples
// potatoes("potato") ➞ 1
// potatoes("potatopotato") ➞ 2
// potatoes("potatoapple") ➞ 1

let item = "potato";
let potatoCount = 0;

function potatoes(str) {
    for(let i = 0; i <= str.length - item.length; i++) {
        if(str.slice(i, i + item.length) == item) {
            potatoCount += 1;
        }
    }
    console.log(potatoCount);
}

potatoes("potatopotato");