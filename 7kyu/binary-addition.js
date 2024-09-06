//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

//The binary number returned should be a string.

//Examples:(Input1, Input2 --> Output (explanation)))

//1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
//5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)



//my solution
//create a function
//add 2 nums and returns the sum in binary string

function addBinary(a,b) {
  //add 2 nums and returns the sum in binary string
  const binary = (a + b).toString(2)
  return binary
}
