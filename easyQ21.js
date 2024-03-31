// Tuck in Array
// Create a function that takes two arrays and insert the second array in the middle of the first array.

// Examples

// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]
// tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]

function tuckIn(arr1, arr2) {
    const middleIndex = Math.round(arr1.length / 2);
    const mergedArray = [];

    for (let i = 0; i < arr1.length; i++) {
        mergedArray.push(arr1[i]);
        if (i === middleIndex - 1) {
            for (const element of arr2) {
                mergedArray.push(element);
            }
        }
    }

    return mergedArray;
}

console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));