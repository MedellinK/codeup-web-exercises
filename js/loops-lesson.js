`use strict`;

// let i = 1;
// while ( i < 10 ) {
//     if (i % 2 === 0 ) {
//         console.log(`Loop #${i}`)
//     }
//     i++;
// }
//
// do {
//     console.log(`Loop #${i}`)
//     i++;
// } while ( i <=10)

// for ( let i = 0 ; i <= 10 ; i++)
//     console.log(`Loop #${i}`)


// const getFactorial = (num) => {
//     let result = num;
//     for (let i = (num - 1 ) ; i > 0 ; i-- ){
//         result *=
//     }
//     return result
// }
// getFactorial(5)


const buildPyramid = (rows) => {
    //loop through rows
    for (let i = 1; i <= rows; i++){
        let row = "";
        //Loop to add spaces
        for (let j = 1; j <= rows -i; j++){
            row += "  ";
        }
        // Loop to add the asterisks
        for (let k = 1; k <= 2 * i - 1; k++){
            row += "* ";
        }
        console.log(row);
    }
}
buildPyramid(5)