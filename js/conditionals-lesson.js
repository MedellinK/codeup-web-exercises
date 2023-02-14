`use strict`;
///CONDITIONAL

let flavor = prompt(`Welcome to Codeup Ice Cream!
What Flavor would you want`);

// if (flavor === chocolate){
//     alert(`one chocolate coming right up!`)
// } else if ( flavor === `vanilla`){
//     alert(`One vanilla coming right up!`)
// } else {
//     alert(`We dont have that flavor, sorry`)
// }

///SWITCH STATEMENTS?

switch (flavor.toLowerCase()){
    case `chocolate`:
        alert(`One chocolate coming right up!`);
        break;
    case`vanilla`:
        alert(`One vanilla coming!`);
        break;
    case `strawberry`:
        alert(`One strawberry coming!`);
        break;
    default :
        alert(`We dont have that flavor sorry !`);
}

function serveIceCream(flavor){
    if (flavor === `chocolate` ||
        flavor === `vanilla` ||
        flavor === `strawberry`){
        alert(`One ${flavor} coming right up!`);
    } else {
        alert(`We dont have it`)
    }
}

serveIceCream(prompt(`Welcome to Codeup Ice Cream! What flavor do you want?`).toLowerCase());

function divisibleByFive(number){
    if (number % 5 === 0){
        console.log(`Divisible by 5!`)
    } else {
        console.log(`Not divisible by 5!`)
    }
}
///TERNARY STATEMENR? IDK
const divisibleByFiveTernary = number => {
    number % 5 === 0 ? console.log(`Divisible by 5!`):
        console.log(`Not divisible by 5!`)
}
///ternary with 2 parameters
// const divisable = (dividend , divisor) => {
//     dividend % divisor === 0 ? console.log(`Divisible by ${divisor}`) :
//         console.log(`Not divisble by ${divisor}`)
// }


const divisible = (dividend, divisor) => {
    return dividend % divisor === 0 ? `divisible by ${divisor}` : `Not disible by ${divisor}`
}

function divisible (dividend, divisor){
    return dividend % divisor === 0;
}