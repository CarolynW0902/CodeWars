//Complete the square sum function so that it squares each number passed into it and then sums the results together.

//For example, for [1, 2, 2] it should return 9 because 1**2 + 2**2 + 2**2 = 9

//my solution

function squareSum(numbers){
  let sqNum = numbers.map(num => num**2);
  let addNum = sqNum.reduce((acc,c) => acc + c, 0)
  return addNum
  }
