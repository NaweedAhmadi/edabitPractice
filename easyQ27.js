// Burglary Series (02): Most Valuable Item
// You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.

// Examples

// mostExpensiveItem({
//   piano: 2000,
// }) ➞ "piano"

// mostExpensiveItem({
//   tv: 30,
//   skate: 20,
// }) ➞ "tv"

// mostExpensiveItem({
//   tv: 30,
//   skate: 20,
//   stereo: 50,
// }) ➞ "stereo"

// Notes
// There will only be one most valuable item (no ties).
// The object will always contain at least one item (no empty objects).

function mostExpensiveItem(obj) {

    let maxPrice = 0;
    let mostExpensiveItemName = '';

    for (const itemName in obj) {
        if (obj[itemName] > maxPrice) {
            maxPrice = obj[itemName];
            mostExpensiveItemName = itemName;
        }
    }

    return mostExpensiveItemName;
}

mostExpensiveItem({
  piano: 2000,
});