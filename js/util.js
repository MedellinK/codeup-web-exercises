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

