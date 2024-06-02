//Write a small function that returns the values of an array that are not odd.

//All values in the array will be integers. Return the good values in the order they are given.

//my solution

function noOdds(arr){
  // Return all non-odd values
  return arr.filter((values) => values % 2 === 0)
}