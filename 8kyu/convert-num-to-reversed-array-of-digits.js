//Convert number to reversed array of digits
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//Example(Input => Output):
//35231 => [1,3,2,5,3]
//0 => [0]



//my solution

function digitize(n) {
  //turn integer into string
  //split the string
  //reverse string
  //map the string to turn into a number and put into array
  return n.toString().split('').reverse().map(Number);
   
}