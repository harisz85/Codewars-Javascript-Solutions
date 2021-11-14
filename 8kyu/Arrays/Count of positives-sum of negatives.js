function countPositivesSumNegatives(input) {
  let newArr = [];
  let arrPos = [];
  let arrNeg = [];
  let arrNegSum = [];

  if (input == 0 || input == null) { return [] }

  arrNeg = input.filter(check);

  function check(num) {
    return num < 0;

  }

  arrNegSum = arrNeg.reduce(function (a, b) { return a + b }, 0);

  arrPos = input.filter(checkPos);

  function checkPos(num) {
    return num > 0
  };


  newArr.push(arrPos.length, arrNegSum);

  return newArr;


}