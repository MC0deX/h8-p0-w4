function changeMe(arr) {
  //you can only write your code here!
  for (var i = 0; i < arr.length; i++) {
    var data = {}
    console.log((i+1) + '. ' + arr[i][0] + '  ' + arr[i][1])
    data.firstname = arr[i][0];
    data.lastname = arr[i][1]
    data.gender = arr[i][2]
    if (arr[i][3] === undefined) {
      data.age = "Invalid Birth Years"
    } else {
      data.age = 2018 - arr[i][3]
    }
    console.log(data)
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
//   changeMe([]); // ""