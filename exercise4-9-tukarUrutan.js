function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var perubahan = ''
    for (let i = 0; i < kalimat.length; i++) {
      // console.log(kalimat[i].toUpperCase())
      // Jika kalimat awal === Huruf besar
      if (kalimat[i] === kalimat[i].toUpperCase()) {
        //Rubah ke kalimat kecil
        perubahan = perubahan + kalimat[i].toLowerCase()
      } else {
        perubahan = perubahan + kalimat[i].toUpperCase()
      }
    }
    return perubahan
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"