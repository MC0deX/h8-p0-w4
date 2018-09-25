/*
Function akan me-return modus dari array atau deret angka tersebut. 
Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. 
Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1
*/
function cariModus(arr) {
  var modus = []
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    var count = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++
      }
    }
    modus.push(count)
  }
  // return modus
  var hasil = 0
  for (let k = 0; k < modus.length; k++) {
    if (modus[k] === 1) {
      hasil += 1
    } else if (modus[k] === modus.length || modus[k] === 1) {
      return -1
    } else if (modus[k] === 2) {
      return arr[k]
    }
  }
  return hasil
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1