(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    //let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    // planetsArray = planetsString.split(`|`)
    // console.log(planetsArray)

    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

   let planetsArray = planetsString.split(`|`)
    //console.log(planetsArray)
     let brPlanets = planetsArray.join(`<br>`)
    console.log(brPlanets)

   //  planetsString = planetsString.push(`<ul>`).unshift(`<ul>`)
   //  planetsString = planetsString.unshift(`<ul>`)
   //  let plane

let planetList = `<ul><li>${ planetsArray.join(`</li><li>`) } </li></ul>`
console.log(planetList)


})();