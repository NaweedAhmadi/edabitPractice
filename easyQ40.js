// Incorrect Import Statement

// When importing objects from a module in Python, the syntax usually is as follows:

// from module_name import object

// Given a string of an incorrect import statement, return the fixed string. All import statements will be the wrong way round.

// Examples
// fixImport("import object from module_name") ➞ "from module_name import object"
// fixImport("import randint from random") ➞ "from random import randint"
// fixImport("import pi from math") ➞ "from math import pi"

// Split method
function fixImport(str) {
    let arr = str.split(" ");

    console.log(`from ${arr[3]} import ${arr[1]}`);
}

// Slice method
function fixImport(str) {
    let fromIndex = str.indexOf("from");
    let objectName = str.slice(fromIndex + 5);
    let moduleName = str.slice(7, fromIndex - 1);

    console.log(`from ${objectName} import ${moduleName}`);
}

fixImport("import object from module_name");