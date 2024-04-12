// Burglary Series (08): Remove an Entry
// Your spouse tells you that one of the items on the list wasn't stolen, it is in your castle in Transilvania. Given an object of the stolen items and an item name, return a copy without that item on the list.

// Examples

// removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate") ➞ { piano: 300, tv: 100 }
// removeEntry({ mirror: 500, painting: 1 }, "mirror") ➞ { painting: 1 }

// Notes
// The object will contain at least two items.
// Preferably, mutate the copy, not the original.

function removeEntry(stolenItems, oneItem) {
    let oldArray = Object.entries(stolenItems);
    let newArray = [];

    for(let i = 0; i < oldArray.length; i++) {
        let key = oldArray[i][0];
        let value = oldArray[i][1];
        
        if(key != oneItem) {
            newArray.push([key, value]);
        }
    }
    console.log(Object.fromEntries(newArray));
    
}

removeEntry({ mirror: 500, painting: 1 }, "mirror");