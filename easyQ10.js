// Check if One Array can be Nested in Another
// Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

// Examples
// canNest([1, 2, 3, 4], [0, 6]) ➞ true

// canNest([3, 1], [4, 0]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

// canNest([1, 2, 3, 4], [2, 3]) ➞ false

function nestedArray(arr1, arr2) {
    var arr1Min = Math.min.apply(null, arr1);
    var arr2Min = Math.min.apply(null, arr2);

    var arr1Max = Math.max.apply(null, arr1);
    var arr2Max = Math.max.apply(null, arr2);

    if (arr1Min > arr2Min && arr1Max < arr2Max) {
        console.log(true);
    } else {
        console.log(false);
    }

}

nestedArray([1, 2, 3, 4], [0, 6]);