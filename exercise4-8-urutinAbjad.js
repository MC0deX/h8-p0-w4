function urutkanAbjad(str) {
  // you can only write your code here!
  var abjad = 'abdcdefghijklmnopqrstuvwxyz'
  var urutinAbjad = ''
  for (let i = 0; i < abjad.length; i++) {
    for (let j = 0; j < str.length; j++) {
      // console.log(abjad[i])
      // console.log(str[j])
      if (abjad[i] === str[j]) { //Bandingkan dengan str
        urutinAbjad += str[j] // jika ada salah satu abjad maka masukkan
      }
    }
  }
  return urutinAbjad
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
// console.log(urutkanAbjad('truncate')); // 'acenrttu'
// console.log(urutkanAbjad('developer')); // 'deeeloprv'
// console.log(urutkanAbjad('software')); // 'aeforstw'
// console.log(urutkanAbjad('aegis')); // 'aegis'