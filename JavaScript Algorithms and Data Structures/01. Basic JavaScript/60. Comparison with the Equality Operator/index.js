/*
// Setup
function testEqual(val) {
    if (val) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);
*/

// Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.
// Setup
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);