// /** 1. Create a function that will return how many whitespace characters are at the beginning and end of a string. */
//
// function countWhitespace(str) {
//     // Count the whitespace at the beginning of the string
//     let whitespaceAtStart = str.length - str.trimStart().length;
//
//     // Count the whitespace at the end of the string
//     let whitespaceAtEnd = str.length - str.trimEnd().length;
//
//     // Return an object containing both counts
//     // return {whitespaceAtStart , whitespaceAtEnd }
//     return whitespaceAtStart + whitespaceAtEnd
// }
//
//
// let res = countWhitespace(` tacos  `)
//
// //console.log(res)
// //console.log(res.whitespaceAtStart)
//
// /** Write a function called `add(a, b)` that returns the sum of a and b */
//
// const add = (num1,num2) => {
//     if (typeof num1 === `number` && typeof num2 === `number`) {
//         return num1 + num2
//     }else return false
//
// }
// //console.log(add(`1`,1))
//
// /** Write a `remainder(number, divisor)` function that returns the remainder left
// over when dividing `number` by the `divisor` */
//
// const remainder = (number,divisor) => {
//     if (typeof number === `number` && typeof divisor === `number`){
//         let remainder = number % divisor
//         return remainder
//     } else return false
// }
//
// console.log(remainder(5,4))
//
// // 1. Create a function that takes in two string inputs.
// //
// // - If the second string input is present in the first, return the first input
// // string with the second input string removed from it.
// // - If the second string input is present multiple times in the first, the
// // second string will only be removed where it first occurs in the first
// // string.
// // - If the second string input is not present in the first, return the first
// // string as entered in the function.
//
// let bigWord
//
//
// const isOdd = num => {
//     return num % 2 !== 0
// }
// console.log(isOdd(1))

// const isEven = (number) => {
//     return number % 2 === 0
// }
//
// console.log(isEven(2))

// Make a function named `identity(input)` that returns the input exactly as
// provided.

// const identity = input => input

// console.log(identity(`Hello World`))

// const isFive = num => {
//     if (typeof num === `number`) return num === 5
//     else return false
// }
//
// console.log(isFive("non"))
//
// // Make a function named `addFive(input)` that adds five to some input.
//
// const addFive = input => input += 5
//
// console.log(addFive(5))

// Make a function named `isMultipleOfFive(input)`

const isMultipleOfFive = input =>  input % 5 === 0

console.log(isMultipleOfFive(10))
