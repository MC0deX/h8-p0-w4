/* 
    1. Karena prinsipnya median itu nilai tengah yang dimana (a + b) / 2 maka dari itu kita buat variable nilaiTengah terlebih dahulu dengan komposisi 
    2. Buat variable Nilai tengah untuk menghitung panjang array yang dibagi 2
    3. buat variable hasil dengan nilai 0
    4. Jika panjang array mod 2 sama dengan 0 maka hasil ganti dengan panjang array dan return hasil
    5. Jika tidak,return arr nilaiTengah kurang 1 + arr nilaiTengah dibagi 2

*/
function cariMedian(arr) {
    // you can only write your code here!
    // arr.sort( function(a,b) {return a - b;} );
    var nilaiTengah = Math.floor(arr.length / 2);
    var hasil = 0;

    if (arr.length % 2) {
        hasil = arr[nilaiTengah]
        return hasil
    } else {
        return (arr[nilaiTengah - 1] + arr[nilaiTengah]) / 2
    }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5