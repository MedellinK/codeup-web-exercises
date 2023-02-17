`use strict`
// let num = 2
//
// while (num <= 65536){
//     console.log(num)
//     num *= 2
// }


// This is how you get a random number between 50 and 100
let stockOfCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5


do {
    let soldToClient = Math.floor(Math.random() * 5) + 1;
    if ( soldToClient > stockOfCones) console.log(`Cannot sell you ${soldToClient} cones I only have ${stockOfCones}.`)
    if ( soldToClient <= stockOfCones) {
        console.log(`${soldToClient} cones sold.`)
        stockOfCones -= soldToClient
    }
} while ( stockOfCones > 0)

console.log(`Yay! I sold them all!`)