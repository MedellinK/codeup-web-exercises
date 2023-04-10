"use strict";

/*UTILS should always run first inside of an HTML file*/
/*paste the following
<script src = "js/utils.js"></script>
 */
const isEvenOdd = (number) => {
    if(number % 2 === 0) {
        return "The number is even";
    } else {
        return `The number is odd`;
    }
}

const isPositiveNegative = (number) => {
    if(number > 0) {
        return `The number entered was positive`;
    } else {
        return `the number entered was negative`;
    }
}

const formatAsUSCurrency = (number) => {
    return parseFloat(number).toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function formatToLocaleString(number, language, country, currency){
    return parseFloat(number).toLocaleString(`${language}-${country}`,
        {style: 'currency', currency: currency}
    );
}

function isNumericandNotNaN(input){
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== `boolean` && typeof input !== `string`
}
/**
 * Function passwordCreate takes in a 'size' argument representing how long a password to create.
 * Function will randomly select a value from all alphanumeric values in [a-zA-Z0-9]
 * to then generate and return a random password String
 *
 * @var: size: Number
 * @return: password: String
 */
function passwordCreate(size){
    let alphaNum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*.?"
    let password = ""
    let i = 0
    for(i; i < size; i++){
        let char = alphaNum[Math.floor(Math.random() * alphaNum.length)]
        password = password + char // password += char
    }

    return password
}

console.log("Random password is: " + passwordCreate(15))

/** random number with you setting the parameters */

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arrayOfRandomNumbers(lengthOfArray){
    const array = [];
    for (let i = 0 ; i < lengthOfArray ; i++){
        let newRandomNumber = randomNumber(1,100)
        while(array.includes(newRandomNumber)){
            newRandomNumber = randomNumber(1,100)
        }
        array.push(newRandomNumber)
    }
    return array
}

/** check if input is a palindrome */
function isPalindrome(input) {
    if (typeof input === 'string') {
        return input.toLowerCase() == input.toLowerCase().split('').reverse().join('');
    } else {
        return false;
    }
}

"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */
// a function named checkForNumber that accepts an argument and returns a string 'number' or "not a number" based on whether the input is a number.
function checkForNumber(input){
    if (typeof input === 'number') {
        return 'number'
    } else {
        return 'not a number'
    }
}

// Write a function named evenOrOdd that returns the string "even" or "odd" when passed a numeric argument. The resulting string should represent whether the number is even or odd.
function evenOrOdd(input) {
    if (input % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}

//Write a function named doubleTheElements that accepts an array of numbers and returns an array with double the value of each number.
function doubleTheElements(array){
    let array2 = array.map(x => x * 2);
    return array2;
}

//Write a function named sumOfElements that accepts an array of numbers and returns the sum of those numbers.
function sumOfElements(array){
    let total = 0;
    for (let i = 0; i < array.length; ++i) {
        total += array[i];
    }
    return total;
}

//Write a function named totalPrice that accepts an array of objects where each object represents a product from a store, that has a price property. The function should return the total of every object's price property.

function totalPrice(array) {
    const total = array.reduce((total, curVal) => {
        return total + curVal.price;
    }, 0);
    return total;
}

//Write a function named findHighestPrice that accepts an array of objects where each object represents a product from a store, that has a price property. The function should return the highest price value from the array. findHighestPrice.
function findHighestPrice(array) {
    let biggestNumber = 0;
    for (let i = 0; i < array.length; i++){
        if(biggestNumber < array[i].price) {
            biggestNumber = array[i].price;
        }
    } return biggestNumber
}

//Write a function named discountCheck. The function should accept an object that represents a customer's transaction. The object passed into the function should have customerName, items, and clubMember properties. A customer will qualify for a discount if they have a total from the items property of 150 or greater, or if they are a club member. discountCheck should return a boolean representing whether the customer described by the object qualifies for a discount.
//
// HINT: The totalPrice function may be used to calculate the total price of the items by passing in the array of items.
function discountCheck(object){
    return object.clubMember || totalPrice(object.items) > 150;
}

//Write a function named newProduct with two parameters, a string that contains a name, and a number representing the product's price, and returns an object with properties name and price.
function newProduct(name, price) {
    return {
        name: name,
        price: price
    }
}

//Write a function named countWords that accepts a string and returns the number of words in that string.
function countWords(str){
    return str.split(' ')
        .filter(function(n) { return n != '' })
        .length;
}

// Write a function named describeNumber that takes in an integer and will return an object describing different features of the input as a number. If the input is a number, the object should have three properties: value for the value passed, evenOrOdd which should be a string to identify whether the passed argument is evenly divisible by 2, and numberOfDigits which should count the number of digits in the argument passed into the function:
function describeNumber(integer){
    integer = parseInt(integer);
    return {
        value: integer,
        evenOrOdd: evenOrOdd(integer),
        numberOfDigits: integer.toString().length
    }
}

//Write a function named screamingSnakeCase that accepts a string that has several words each separated by a space, and returns a string with each word in all caps, and with the spaces replaced by underscores (ex. SCREAMING_SNAKE_CASE).
function screamingSnakeCase(string){
    let key= string.toUpperCase();
    key=key.replace(/ /g,"_");
    return key
}