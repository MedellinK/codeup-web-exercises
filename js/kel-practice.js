`use strict`

/** For Loops Exercises from the Leson */
/** number juan */

// const showMultiplicationTable = num =>{
//     for (let i = 1 ; i <= 10 ; i++)
//         console.log(`${num} * ${i} = ${num * i}`)
// }
// showMultiplicationTable(7)
//
//
//
// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

/**
 * Drink Sorting
 * You will be given an array of drinks, with each drink being an object with two properties: name and price.
 * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
 *
 * Assume that the following array of drink objects needs to be sorted:
 * drinks = [
 *     {name: "lemonade", price: 50},
 *     {name: "lime", price: 10}
 * ]
 *
 * Examples
 * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
 */


const drinks = [

    {
        drinkName: "Lemonade",
        drinkPrice: 50
    }
    ,
    {
        drinkName: "Lime",
        drinkPrice: 10,
    }
    ,
    {
        drinkName: "Tea",
        drinkPrice: 25,
    }


]

const sortDrinksByPrice = (array) => {
    for (let i = 0 ; 0 <= drinks.length; i++){
        console.log(drinks.drinkName, drinks.drinkPrice)
    }
console.log(sortDrinksByPrice(drinks))
}