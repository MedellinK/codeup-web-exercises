`use strict`

/** For Loops Exercises from the Leson */
/** number juan */

const showMultiplicationTable = num =>{
    for (let i = 1 ; i <= 10 ; i++)
        console.log(`${num} * ${i} = ${num * i}`)
}
showMultiplicationTable(7)



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}