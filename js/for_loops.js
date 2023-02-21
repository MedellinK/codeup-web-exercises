 `use strict`

/** NUMBER 2 */
const showMultTable = input => {
    for(let i = 1 ; i <= 10; i++){
        console.log(`${input} * ${i} = ${input * i}`)
    }
}
showMultTable(6)

/** NUMBER 3 */

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 0 ; i <=10; i++){
    let ranNum = randomNumber(20,200)
    if (ranNum % 2 !== 0){
        console.log(`${ranNum} it is an odd number`);

    } else {

        console.log(`${ranNum}its even number`);
    }
}

/** NUMBER 4 */

for ( let i = 1 ; i <= 9 ; i++ ) {
    console.log(`${i}`.repeat(i));
}

for (let i = 1; i <= 9; i++) {
    let output = "";
    for (let j = 1; j <= i; j++) {
        output += i;
    }
    console.log(output);
}
/** NUMBER 5 */

for (let i = 100 ; i > 0 ; i -= 5 ){
    console.log(i)
}

/** NUMBER 6 */


