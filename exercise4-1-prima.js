/*
1. Pergunakan looping untuk mengechek apakah angka itu bilangan prima atau tidak
2. Jika angka modulus i sama dengan 0 maka masuk step 2a
    2a. Tampilkan nilai boolean false
3. return menjadi true
*/
function angkaPrima(angka) {
    // you can only write your code here!
    for (var i = 2; i < angka; i++) {
        if (angka % i === 0) {
            return false
        }
    }
    return true
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false