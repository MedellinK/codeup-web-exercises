// const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
//
// // prices.forEach(price => console.log(price))
//
// const priceAfterTax = prices.map(price =>{
//     const tax = (price * 0.0825).toFixed(2);
//     const total = (price + parseFloat(tax)).toFixed(2);
//     return total
// });
//
// // console.log(priceAfterTax)
//
// let randomNumbers = [70, 30, 73, 22, 40, 48, 76, 20, 13, 92, 20, 56, 97, 76, 26, 77, 57, 47, 83, 70 ];
//
// const squaredNumbers = randomNumbers.map(num => num * num)
//
// // console.log(squaredNumbers)
//
//
// const cars = [
//     {
//         make: "Honda",
//         model: "Civic",
//         mileage: 10428
//     },
//     {
//         make: "Toyota",
//         model: "Corolla",
//         mileage: 9425
//     },
//     {
//         make: "Ford",
//         model: "Mustang",
//         mileage: 2567
//     },
//     {
//         make: "Audi",
//         model: "A3",
//         mileage: 14500
//     },
//     {
//         make: "Mazda",
//         model: "3",
//         mileage: 11248
//     }
// ];
//
// const  mileages = cars.map(car => car.mileage);
// // const carNames = cars.map(car => `${car.make} ${car.model}`)
//
// const carNames = cars.map(({make,model,mileage}) => `${make}, ${model}`)
// // console.log(carNames)
//
// const books = [
//     {
//         name: `Book # 1`,
//         title: `El Borracho`,
//         author: {
//             firstName: `Kelvyn`,
//             lastName: `Medellin`
//         }
//     },
//     {
//         name: `Book # 2`,
//         title:`Paco Taco`,
//         author: {
//             firstName: `Anthony`,
//             lastName: `Mangos`
//         }
//     },
//     {
//         name: `Book # 3`,
//         title:`Berserk`,
//         author: {
//             firstName: `Manga`,
//             lastName: `Guy`
//         }
//     },
//     {
//         name: `Book # 4`,
//         title:`Jujustsu`,
//         author: {
//             firstName: `Dee`,
//             lastName: `Jay`
//         }
//     },
//     {
//         name: `Book # 5`,
//         title: `Ring King`,
//         author: {
//             firstName: `Jose`,
//             lastName: `Leon`
//         }
//     }
// ];
//
// // const author = books.map(book => `${book.author.firstName} ${book.author.lastName}`)
// // console.log(author)
//
// const author = books.map(book => {
//     return {
//         title: book.title,
//         author: `${book.author.firstName} ${book.author.lastName}`
//     }
// });
// // console.log(author)
//
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// const emails = users.map( user => user.email)
// // console.log(emails)
//
//
// const underTenThousandMiles = cars.filter(car => car.mileage < 10000)
// console.log(underTenThousandMiles)

/**  exercises stuff */

// const languages =  users.filter( user => user.languages.length <= 3)
// console.log(languages)

// let experience = users.map( user => user.yearsOfExperience)
// console.log(experience)
let totalExperience = users.reduce((total, {yearsOfExperience: years}) => {
    return total + years
},0);
console.log(totalExperience)
let avg = totalExperience/ users.length
console.log(avg)

const longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
        return user.email;
    } else {
        return longest;
    }
}, '');
console.log(longestEmail)




const smashers = ["Mario", "Donkey Kong", "Link", "Samus","Dark Samus", "Yoshi", "Kirby", "Fox", "Pikachu", "Luigi", "Ness", "Captain Falcon", "Jigglypuff",     "Peach", "Daisy", "Bowser", "Ice Climbers", "Sheik", "Zelda", "Dr. Mario", "Pichu", "Falco", "Marth", "Lucina", "Young Link", "Ganondorf", "Mewtwo", "Roy", "Chrom", "Mr. Game & Watch", "Meta Knight", "Pit", "Dark Pit", "Zero Suit Samus", "Wario", "Snake", "Ike", "Pokemon Trainer", "Squirtle", "Ivysaur", "Charizard", "Diddy Kong", "Lucas", "Sonic", "King Dedede", "Olimar", "Lucario", "R.O.B.", "Toon Link", "Wolf", "Villager", "Mega Man", "Wii Fit Trainer", "Rosalina & Luma", "Little Mac", "Greninja", "Mii Brawler", "Mii Swordfighter", "Mii Gunner", "Palutena", "Pac-Man", "Robin", "Shulk", "Bowser Jr.", "Duck Hunt", "Ryu", "Ken", "Cloud", "Corrin", "Bayonetta", "Inkling", "Ridley", "Simon", "Richter", "King K. Rool", "Isabelle", "Incineroar", "Piranha Plant", "Joker", "Hero", "Banjo & Kazooie", "Terry", "Byleth", "Min Min", "Steve", "Sephiroth", "Pyra", "Mythra", "Kazuya", "Sora"];
const only5 = smashers.filter(name => name.length === 5)
// console.log(only5)
const over10 = smashers.filter(name => name.length > 10)
// console.log(over10)
// console.log(smashers.sort())


// usedCars.filter(car => car.price < 10000)
//     .map( car => {
//
//     const tax = car.price * 0.0825;
//     const total = (car.price + tax).toFixed(2);
//     return {...car, priceWithTax}: parseFloat(total)
//         }
// })
//     .sort((a,b) => b.price - a.price)
//     .forEach(({year, make, model, price, priceWithTax: }) => {
//         const p = document.createElement('p');
//         p.innerText = `${year}, ${make}, ${model}, ${price}, ${priceWithTax}`;
//         document.querySelector('body').append(p);
// });

const usedCars = [
    {
        year: 2006,
        make: "Toyota",
        model: "Prius",
        price: 8044
    },
    {
        year: 2017,
        make: "Honda",
        model: "Civic",
        price: 18123
    },
    {
        year: 2004,
        make: "Ford",
        model: "Mustang",
        price: 9052
    },
    {
        year: 2013,
        make: "Cadillac",
        model: "ATS",
        price: 10991
    },
    {
        year: 2009,
        make: "Subaru",
        model: "Impreza",
        price: 7335
    },
    {
        year: 2008,
        make: "Dodge",
        model: "Charger",
        price: 8847
    },
    {
        year: 2014,
        make: "Chrysler",
        model: "300",
        price: 13517
    },
    {
        year: 2011,
        make: "Buick",
        model: "Regal",
        price: 8253
    },
    {
        year: 2012,
        make: "Chevrolet",
        model: "Impala",
        price: 6736
    },
    {
        year: 2015,
        make: "BMW",
        model: "3 series",
        price: 13767
    },
    {
        year: 2020,
        make: "Hyundai",
        model: "Elantra",
        price: 17892
    },
    {
        year: 2008,
        make: "Mercedes-Benz",
        model: "C-Class",
        price: 8444
    },
    {
        year: 2016,
        make: "Audi",
        model: "A3",
        price: 15900
    }
];

const usedCarPrices =usedCars.map(car => car.price)
// console.log(usedCarPrices)

let totalValueOfAllCars = usedCarPrices.reduce((total, price, index) => {
    // console.log(`Index: ${index}, total: ${total}, total: ${price}`)
    return total + price
})





