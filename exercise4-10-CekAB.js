function checkAB(str) {
    // you can only write your code here!
    for (var i = 0; i < str.length; i++) {
        // console.log(str[i])
        if (str[i] === 'a' || str[i] === 'b') {
            if (str[i + 4] === 'b' || str[i + 4] === 'a') {
                return true
            } else {
                return false
            }
        }
    }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false