`use strict`



// while (typeof num !== `number` || num % 2 === 0 || num > 50 || num < 1) {
//     prompt(`Input an odd number between 1 and 50:`)
//     if (typeof num === `number` && num % 2 !== 0 && num < 50 && num > 1){
//         break;
//     }
//
// }

// let num;
//
// while (true) {
//     num = parseFloat(prompt(`Input an odd number between 1 and 50:`));
//     if (num % 2 !== 0 && num <= 50 && num >= 1){
//         break;
//     } else {
//         continue
//     }
// }
// console.log(`Number to skip is: ${num}\n`)
// // for (let i = 1 ; i < 50 ; i++) {
// //     if ( i % 2 !== 0 && i !== num){
// //         console.log(`Here is an odd number: ${i}`)
// //         continue;
// //     }if ( i === num){
// //         console.log(`Yikes! Skipping number ${num}`)
// //     }
// // }
//
// for(let i = 1; i < 50; i+=2){
//     if(i === num){
//         console.log(`Yikes! Skipping number ${i}`)
//         continue
//     }
//     console.log(`Here is an odd number: ${i}`)
// }