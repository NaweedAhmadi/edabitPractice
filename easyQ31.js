// Burglary Series (06): Convert to Number
// You prepare a list to send to the insurance company. As you finish, you notice you misformatted it. Given an object with at least one key/value pair, convert all the values to numbers.

// Examples

// convertToNumber({ piano: "200" }) ➞ { piano: 200 }
// convertToNumber({ piano: "200", tv: "300" }) ➞ { piano: 200, tv: 300 }
// convertToNumber({ piano: "200", tv: "300", stereo: "400" }) ➞ { piano: 200, tv: 300, stereo: 400 }

function convertToNumber(stolenItems) {
    const oldArray = Object.entries(stolenItems);
    const newArray = [];

    for(let i = 0; i < oldArray.length; i++) {
        let key = oldArray[i][0];
        let value = Number(oldArray[i][1]);
        
        newArray.push([key, value]);
    }
    console.log(Object.fromEntries(newArray));
}

convertToNumber({ piano: "200", tv: "300", stereo: "400" });