// Burglary Series (09): Filter Values
// The insurance guy calls, the policy you chose doesn't cover values below 5000€, it wouldn't dignify your status you said at the time. Given an object with a list of the stolen items, return a copy of that list without the values below 5000.

// Examples

// { tv: 4999, guitar:5000, fork: 5001 } ➞ { guitar:5000, fork: 5001 }
// { tv: 4999 } ➞ {}
// { guitar: 5000 } ➞ { guitar: 5000 }
// {} ➞ {}

function filterValues(stolenItems) {
    let oldArray = Object.entries(stolenItems);
    let newArray = [];

    for(let i = 0; i < oldArray.length; i++) {
        if (oldArray[i][1] >= 5000) {
            newArray.push(oldArray[i]);
        }
    }

    console.log(Object.fromEntries(newArray));
}

filterValues({ tv: 4999, guitar:5000, fork: 5001 });