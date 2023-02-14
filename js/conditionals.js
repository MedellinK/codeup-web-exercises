"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor (color){
//     color = color.toString()
//     if (color === `blue`){
//         return `Blue is the color of the sky`
//     } else {
//         return `I don't know anything about ${color}`
//     }
// }

//console.log(analyzeColor(`taco`))

// function analyzeColor(color){
//     if (color = `blue`){
//
//     } alert(`Blue is the color of the sky`){
//
//     } else {
//         alert(`I dont know anything about ${color}`)
//     }
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//console.log(analyzeColor(randomColor))
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
//
// function analyzeColor (color){
//     color = color.toString()
//     switch (color){
//         case `blue`:
//             alert( `Blue is the color of the sky`)
//             break
//         default:
//             alert(`I dont know anything about ${color}`)
//     }
// }
//
// analyzeColor(`taco`)


/////////
//////
///////////////////////        teacher example


// function  analyzeColor(color){
//     switch (color){
//         case `red`:
//             return `Roses are red`
//         case `blue`
//             return `The sky is sometimrs blue`
//         default:
//             return `I dont know what ${color} is. `
//     }
//
// }

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
//  */
// let color = prompt(`What is your favorite color?`)
//
// if (color.toLowerCase() === `blue`){
//     alert(`Blue is the color of the sky!`)
// } else {
//     alert(`I don't know anything about ${color}`)
// }
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// function calculateTotal(lucky, price){
//     if (lucky === 0){
//         return (`Sorry no discount for you, your total will be $${price}.`)
//     } else if (lucky === 1){
//         price = price - price * .10
//         return (`You get a 10% discount! Your total will be $${price}`)
//     }else if (lucky === 2){
//         price = price - price * .25
//         return(`YAY! You have recived a 25% discount! Your total is $${price}`)
//     }else if (lucky === 3){
//         price = price - price * .35
//         return(`You have recieved a 35% discount! Your total will be $${price}`)
//     } else if (lucky === 4){
//         price = price - price * .50
//         return(`You get half off! Your totl is $${price}`)
//     }else if (lucky === 5 ){
//         return(`CONGRATS! You get it all for free!`)
//     }else {
//         return(`Oops sorry, something went wrong.`)
//     }
// }
///////////////this is your corect answer!


 function calculateTotal(lucky, price){
    if (lucky === 0){
        price = price - 0
        return price
    } else if (lucky === 1){
        price = price - price * .10
        return price
    }else if (lucky === 2){
        price = price - price * .25
        return price
    }else if (lucky === 3) {
        price = price - price * .35
        return price
    } else if (lucky === 4 ){
        price = price - price * .50
        return price
    }else if (lucky === 5 ){
        price = price * 0
        return price
    }else {
        return
    }
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6

// let luckyNumber = Math.floor(Math.random() * 6);
//
// let totalBill = parseFloat(prompt(`Total Bill?`))
//
// let priceAfterDiscount = calculateTotal(luckyNumber,totalBill)
//
// alert(`Your  lucky number was ${luckyNumber}`)
// alert(`Your total bill was ${totalBill.toLocaleString("en-US", {style:"currency", currency:"USD"})}`)
// alert(`Your price after discount is ${priceAfterDiscount.toLocaleString("en-US", {style:"currency", currency:"USD"})}`)



/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let quest = confirm(`Would you like to enter a number?(Click "OK" if you do want to)`);

    if (quest == false){
        alert(`Kind of rude but ok.`)
    }else if (quest == true){
        let num = parseFloat(prompt(`What number?`));
        if ( num % 2 === 0 && num > 0){
            alert(`${num} is a even number.`)
            alert(`${num} plus 100 is ${num + 100}`)
            alert(`${num} is positive number`)
        }else if (num % 2 !== 0 && num > 0){
                alert(`${num} is an odd number.`)
                alert(`${num} plus 100 is ${num + 100}`)
                alert(`${num} is positive number`)
        }else if ( num % 2 === 0 && num < 0) {
            alert(`${num} is a even number.`)
            alert(`${num} plus 100 is ${num + 100}`)
            alert(`${num} is negative number`)
        }else if ( num % 2 !== 0 && num < 0){
            alert(`${num} is an odd number`)
            alert(`${num} plus 100 is ${num + 100}`)
            alert(`${num} is a negative number`)
        } else {
            alert(`Use the number keys only please C:`)
        }
    }


    ///////////////// refactoring stuff
function getNumber(){
        const wantToEnterNumber = confirm(`Number?`);
        if (wantToEnterNumber){
            const userNumber = parseFloat(prompt(`What Number`))
        }
        return false
}

function analyzeNumber(number){
        if (isNumericandNotNaN(number)){
            alert(`That number is negative!`)

        }
}