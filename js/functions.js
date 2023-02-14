"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */


///const sayHello = (name) => `Hello ${name}`

// const sayHello = (name) => {
//     let message = `Hello ${name}`
//     return message
// }
// let name = sayHello(`Kelvyn`)
//
// console.log(name)


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

// let helloMessage = sayHello(`Kelvyn`)
//
// console.log(helloMessage)

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// let myName = `Kelvyn`
//
// sayHello(myName)
//
// console.log(myName)
//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// let random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

// const isTwo = (num) => {
//     let result = num === 2;
//     return result;
// }
//
// let randomMessage = isTwo(random)
// console.log(`The random number is:${random}`)
// console.log(isTwo(randomMessage))

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
// const  calculateTip = (tipPercentage, billTotal) => {
//     let tipPercentageNum = parseFloat(tipPercentage);
//     let billTotalNum = parseFloat(billTotal)
//     let amountToTip = (tipPercentageNum / 100 * billTotalNum)
//     return amountToTip
// }
//     let tipAmount = calculateTip()
//
// console.log(`The amount you should tip is: ${tipAmount}`)
// const calculteTip = (tip,bill) => {
//     let totalTip = bill * tip
//     return totalTip
// }
//
// console.log(`Your tip is $${calculteTip(.3,20)}`)

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
// let billTotal =(calculteTip(prompt(`Enter you tip (0.30 for 30%)`),prompt(`What is the bill total?`)))
//
// alert(`Your total is $${billTotal}`)
//
// let userBill = parseFloat(prompt(`How much was`))


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

// const applyDiscount = (price,discount) => {
//     let totalPrice = parseFloat(price) - parseFloat(price) * parseFloat(discount)
//     return totalPrice
// }
//
// console.log(applyDiscount(20,.10))


///Functions Pratice From Jaier in the SLack

    //1.

const returnTwo = 2

console.log(returnTwo)

    //2.

const sayHowdy = `Howdy!`

console.log(sayHowdy)

    //3.

const returnName = `Kelvyn Medellin`

console.log(returnName)

    //4.

const addThree = (num) => {
    let result = num + 3
    return result
}

console.log(addThree(4))

    //5.
const sayString = (string) => {
    return string
}
let stringThing = sayString(`rgh`)
console.log(stringThing)


function  reverseString(string){
    let stringArray = string.split(``)
    let reverseStringArray = stringArray.reverse()
    let reversedString = reverseStringArray.join(``)
    return reversedString
}

 console.log(reverseString(`Hello!`))


isNaN()


