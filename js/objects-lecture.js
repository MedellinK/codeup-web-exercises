`strict`

/** OBJECT LITERAL */
// const currentWeather = {
//     temperature: 54.4,
//     humidity: 28,
//     cloud: 0,
//     windDirection: `NNE`
// }
//
// /**  TO ACCESS OBJECT PROPERTIES, USE DOT NOTATION */
//
// //console.log(currentWeather.temperature)
//
// /////////////////////////
//
//     //nested shtuf//
//
// const hourlyWeather = [
//     {
//         time: "08:00",
//         temperature: 78.91,
//         feels_like: 78.91
//     },
//     {
//         time: "09:00",
//         temperature: 79.57,
//         feels_like: 79.57
//     },
//     {
//         time: "10:00",
//         temperature: 81.46,
//         feels_like: 86.04
//     },
//     {
//         time: "11:00",
//         temperature: 84.49,
//         feels_like: 89.24
//     }
// ];
//
// //hourlyWeather.forEach(hourlyForecast => console.log(hourlyForecast.temperature));
//
// for (let i = 0 ; i < hourlyWeather.length ; i++){
//     console.log(hourlyWeather[i].time)
// }

// for (const forecast of hourlyWeather){
//     console.log(forecast.temperature)
// }


/** METHODS */

const fighter = {
    name: `Arata`,
    hitPoints: 18,
    maxDamage: 8,
    // attack: function (enemy){
    //     console.log(`${enemy.name} has ${enemy.hitPoints} hitpoints!`);
    //     console.log(this.name + `Arata attacks`);
    //     const damage = Math.ceil(Math.random() * this.maxDamage);
    //     console.log(`${this.name} does ${damage} points of damage!`);
    //     enemy.hitPoints = enemy.hitPoints - damage;
    //     console.log(`${enemy.name} has ${enemy.hitPoints} hit points left!`);
    // }
}



const fighter2 = {
    name: `Bigfoot`,
    hitPoints: 17,
    maxDamage: 10,
    attack: function () {
        console.log(this.name + `Bigfoot Attacks!`)
    }
}

const monster = {
    name: `Goblin`,
    hitPoints: 8,
    maxDamage: 6,
}

const gameLogic = {
    attack: function (attacker , defender){
        console.log(`${defender.name} has ${defender.hitPoints} hit points.`)
        console.log(`${attacker.name} attacks!`)
        const hpBeforeAttack = defender.hitPoints;
        const damage = Math.ceil(Math.random() * attacker.maxDamage);
        console.log(`${attacker.name} does ${damage} hit points`)
        defender.hitPoints -= damage ;
        console.log(`${defender.name} now has ${defender.hitPoints} hit points left!`);
    }
}



/** CONSTRUCTORS */

function Goblin(name, hitPoints, maxDamage){

}


