import {getplanet,eyecolor,episodeInfo,infoCard} from "./starwars.js";

(async ()=>{
    // let planetNumber = await getplanet(4)
    // let personEyeColor = await eyecolor('Anakin Skywalker')
    let episodeNumberInfo = await episodeInfo(3)
    console.log(episodeNumberInfo)
    // console.log(planetNumber)
    // console.log(personEyeColor)
    let infodaddy = await infoCard(4,'Anakin Skywalker',3)
    await infodaddy
})();