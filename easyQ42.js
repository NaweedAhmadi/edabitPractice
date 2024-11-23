// Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]

// Notes
// All test arrays will have at least one element and are valid.

const smallBig = [];

function minMax(arr) {
    const newArr = arr.sort((a, b) => a -b);
    smallBig.push(newArr[0], newArr[newArr.length -1]);
    console.log(smallBig);
}

minMax([1]);