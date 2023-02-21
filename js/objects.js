(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // let person = {
    //     firstName: "Kelvyn",
    //     lastName: "Medellin",
    //     sayHello: function (){
    //         return `Hello ${this.firstName} ${this.lastName}`
    //     }
    // }
    // console.log(person)
    // console.log(person.firstName)
    // console.log(person.lastName)
    // console.log(person.sayHello())

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // person.sayHello = function (){
    //     return `Hello, ${this.firstName} ${this.lastName}`
    // }


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    //
    // let shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    //
    // shoppers.forEach((shopper) => {
    //     //console.log(shopper)
    //
    //     if (shopper.amount > 200){
    //         let original = shopper.amount
    //         let discount = shopper.amount * .12
    //         let total = shopper.amount = shopper.amount - shopper.amount * .12
    //         console.log(`${shopper.name} original price was $${original}, the discounted amount was $${discount}, and the total was $${total}  `)
    //     } else if (shopper.amount < 200) {
    //         console.log( `${shopper.name} gets no discount so your total is $${shopper.amount}`)
    //     }
    // })


// const Total = moneySpent => {
//     if (parseFloat(moneySpent) > 200) {
//         moneySpent = parseFloat(moneySpent * .12)
//     } else {
//         return moneySpent
//     }
// }

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

// const books = [
//         {
//             name: `Book # 1`,
//             title: `El Borracho`,
//             author: {
//                 firstName: `Kelvyn`,
//                 lastName: `Medellin`
//             }
//         },
//         {
//             name: `Book # 2`,
//             title:`Paco Taco`,
//             author: {
//                 firstName: `Anthony`,
//                 lastName: `Mangos`
//             }
//         },
//         {
//             name: `Book # 3`,
//             title:`Berserk`,
//             author: {
//                 firstName: `Manga`,
//                 lastName: `Guy`
//             }
//         },
//         {
//             name: `Book # 4`,
//             title:`Jujustsu`,
//             author: {
//                 firstName: `Dee`,
//                 lastName: `Jay`
//             }
//         },
//         {
//             name: `Book # 5`,
//             title: `Ring King`,
//             author: {
//                 firstName: `Jose`,
//                 lastName: `Leon`
//             }
//         }
//     ];

    const books = [
        {
            name: `Book # 1`,
            title: `El Borracho`,
            author: {
                firstName: `Kelvyn`,
                lastName: `Medellin`
            }
        },
        {
            name: `Book # 2`,
            title:`Paco Taco`,
            author: {
                firstName: `Anthony`,
                lastName: `Mangos`
            }
        },
        {
            name: `Book # 3`,
            title:`Berserk`,
            author: {
                firstName: `Manga`,
                lastName: `Guy`
            }
        },
        {
            name: `Book # 4`,
            title:`Jujustsu`,
            author: {
                firstName: `Dee`,
                lastName: `Jay`
            }
        },
        {
            name: `Book # 5`,
            title: `Ring King`,
            author: {
                firstName: `Jose`,
                lastName: `Leon`
            }
        }
    ];



    // books.forEach(function (book){
    //     console.log(book.name)
    //     console.log(book.title)
    //     console.log(book.author.firstName)
    //     console.log(book.author.lastName)
    // })

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function (book,index){
        // console.log(book.name)
        console.log(`Book # ${index + 1}`)
        console.log(`Title : ${book.title}`)
        console.log(`Author : ${book.author.firstName} ${book.author.lastName}`)
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

function Book(author, name,title){
    this.author = author;
    this.name = name;
    this.title = title;

    }

    const kelvyn = {
        firstName: "Kelvyn",
        lastName: "Medellin"
    }

    const newBook = new Book(kelvyn,`Book # 6`, `Tacos Loco`)
    // console.log("yo, new book:" + newBook.name + " " + newBook.author.firstName)
    // console.log(books.length)
    // books.forEach(book => console.log(book.name))
    //
    // console.log()
})();

// function Goblin(name){
//     this.name = name;
//     this.hitPoints = 8;
//     this.maxDamage = 6;
// }

// const goblin1 = new Goblin("goblin 1");
// const goblin2 = new Goblin("goblin 2");
// const goblin3 = new Goblin("goblin 3");