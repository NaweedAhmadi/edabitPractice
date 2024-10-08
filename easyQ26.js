// Burglary Series (01): Calculate Total Losses
// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

// Examples
// const stolenItems = {
//   tv: 30,
//   skate: 20,
//   stereo: 50,
// } ➞ 100

// const stolenItems = {
//   painting: 20000,
// } ➞ 20000

// const stolenItems = {} ➞ "Lucky you!"

// Notes
// The item value is always positive.
// This is my first experience in creating a challenge. I started to learn testing so I decided to give it a go here at Edabit as well. Hope I did it right... Suggestions are very welcome!
// This series is part of a collection that focuses on objects. If you are interested in following the breath-taking narrative skills of yours truly or just do some object focused challenges (the challenges are ordered in ascending difficulty order), you can more easily do that there.

const stolenItems = {
  tv: 30,
  skate: 20,
  stereo: 50,
}

let objectLength = Object.keys(stolenItems).length;
let objectKeys = Object.keys(stolenItems);

let totalAmount = 0;

if(objectLength == 0) {
   console.log(`Lucky you! Nothing was stolen.`);
} else {
    for(let i = 0; i < objectLength; i++) {
        totalAmount += stolenItems[objectKeys[i]];
    }
    console.log(`Total value of stolen items: ${totalAmount}`);
}