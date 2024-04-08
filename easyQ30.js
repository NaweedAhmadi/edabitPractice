// Burglary Series (05): Third Most Expensive
// Time to call your lover to inform what he/she lost in the burglary.

// Given an object of the stolen objects, return the 3rd most expensive item on the list. If that is not possible, because there are not enough items, return false.

// Examples

// thirdMostExpensive({}) ➞ false
// thirdMostExpensive({ piano: 100, tv: 200 }) ➞ false
// thirdMostExpensive({ piano: 400, tv: 300, stereo: 200 })  ➞ "stereo"
// thirdMostExpensive({ piano: 1000, tv: 500, ball: 10 , mirror: 200, }) ➞ "mirror"

function thirdMostExpensive(stolenItems) {
    const itemsArray = Object.entries(stolenItems).sort((a, b) => b[1] - a[1]);

    if (itemsArray.length >= 3) {
        return itemsArray[2][0];
    } else {
        return false;
    }
}

thirdMostExpensive({ piano: 1000, tv: 500, ball: 10 , mirror: 200 });