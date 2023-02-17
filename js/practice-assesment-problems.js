/** 1. Create a function that will return how many whitespace characters are at the beginning and end of a string. */

function countWhitespace(str) {
    // Count the whitespace at the beginning of the string
    let whitespaceAtStart = str.length - str.trimStart().length;

    // Count the whitespace at the end of the string
    let whitespaceAtEnd = str.length - str.trimEnd().length;

    // Return an object containing both counts
    // return {whitespaceAtStart , whitespaceAtEnd }
    return whitespaceAtStart + whitespaceAtEnd
}


let res = countWhitespace(` tacos  `)

console.log(res)
//console.log(res.whitespaceAtStart)