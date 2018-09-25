function hitungHuruf(kata) {
    //     var katas = ''
    //     var jumlahKata = 0
    //     for (let i = 0; i < kata.length; i++)
    //         if (kata[i] === ' ' || i === kata.length - 1) {
    //             if (i === kata.length - 1) {
    //                 katas += kata[i]
    //             }
    //             jumlahKata++
    //             katas = ''
    //         } else {
    //             katas += kata[i]
    //         }
    //     return katas

    var tiapKata = kata.split(' ')
    // console.log(tiapKata)
    for (let i = 0; i < tiapKata.length; i++) {
        // console.log(tiapKata[i])
        var word = tiapKata[i]
        for (let j = 0; j < word.length; j++) {
            var jumlah = 0
            for (let k = 0; k < word.length; k++) {
                if (word[j] === word[k]) {
                    jumlah += 1
                }
            }
            // return tiapKata[i]
            if (jumlah > 1) {
                return tiapKata[i]
            }
        }
    }
    return tiapKata
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
// console.log(hitungHuruf('I am a passionate developer')); // passionate
// console.log(hitungHuruf('aku adalah anak gembala')); // adalah
// console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
// console.log(hitungHuruf('mengayuh perahu di danau')); // danau