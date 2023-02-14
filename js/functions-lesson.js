"use strict";

// IIFE ( Immediately Invoked Function Expression) arrow frunction put the thingy around your code in order to protect it.
// (() => {
// })();


(() => {

/// traditional method ///
//function helloWorld(){
    //   alert("Hello World!")
//}


/// the arrow function ///

    const helloWorld = (name) => {
        let message = `Hello ${name}!`
    }

    helloWorld("Kelvyn");

    let message
    const highfive = (name1, name2) => {
        message = `${name1} gives ${name2} a high five`;
        return message
    }

    let names1 = highfive("Jason", "Javier")
    console.log(names1);

//create an arrow function isEven(num) that takes an integer as an argument
// it returns true if the integer is even and false if not

    const isEven = (num) => {
        let result = num % 2 === 0;
        return result;
    }

    let students = 24;

})();

(function(){

})();