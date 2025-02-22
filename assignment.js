/***********

Problem 1:
A company decided to give bonus of 5% to an employee if his/her year of service is more than 5 years. Given a salary and year of service and print the net bonus amount.

Variables Required (feel free to add your own variables if needed):
salary (number)
yearsOfService (number)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:
    salary = 50000
    yearsOfService = 6

   Result: 2500

2. Given the following:
    salary = 90000
    yearsOfService = 5

   Result: 0

3. Given the following:
    salary = 83000
    yearsOfService = 9

   Result: 4150
************/

console.log('Problem 1:')

// Add your code below this line
let yearsOfService = 5
let salary = 90000
let netBonus = 0

if (yearsOfService > 5) {
  netBonus =salary * .05
}
console.log(netBonus)
// Add your code above this line

console.log('')
console.log('-----------------')
/***********

Problem 2:

Write a program that finds the average of all the numbers in a given array

Variables Required (feel free to add your own variables if needed):
numbers (array)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:
    problem1Numbers = [1, 2, 3]

   Result: 2

2. Given the following:
    problem1Numbers = [9, 18, 62, 3, 17]

   Result: 21.8

************/


console.log('Problem 2:')

// Add your code below this line
let numArray = [9, 18, 62, 3, 17]
  let sum = 0
  numArray.forEach(function(numArray) {
    sum += numArray
  })
  console.log(sum / numArray.length)


// Add your code above this line

console.log('')
console.log('-----------------')

/***********
Problem 3:

Fizz buzz. Write a program that will iterate through numbers 1 to 100 and do the following:

- if the number is divisible by 3, print "fizz"
- if the number is divisible by 5, print "buzz"
- if the number is divisible by 3 and 5, print "fizzbuzz"
- if the number is not divisible by 3 or 5 just, print the number

Variables Required: none (choose your own)

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. Given the following:

   Expected Result:
   0
   1
   2
   fizz
   4
   buzz
   fizz
   7
   8
   fizz
   buzz

************/
console.log('Problem 3:')

// Add your code below this line
for (let i=0; i < 101; i++){
  if (i % 15 === 0)
  console.log("FizzBuzz")

  else if (i % 3 === 0)
  console.log("Fizz")

  else if (i % 5 === 0)
  console.log("Buzz")

  else
  console.log(i)
}




// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
