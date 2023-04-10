export const getplanet = async (number) => {

    try{
        let response = await fetch(`https://swapi.dev/api/planets/${number}/`)
        let data = await response.json()
        return data

    }catch (error){
        console.log(error)
    }
}

export const eyecolor = async (nameC) => {
    try {

        let response = await fetch(`https://swapi.dev/api/people/?search=${nameC}`)
        let data = await response.json()
        // console.log(data)
        let person = {
            name: data.results[0].name,
            eyeColor: data.results[0].eye_color
        }
        return person;

    } catch (error){
        console.log(error)
    }

}

export const episodeInfo = async (episodeNumber) => {
    try {

        let response = await fetch(`https://swapi.dev/api/films/${episodeNumber}`)
        let data = await response.json()
        return data

    }catch (error){
        console.log(error)
    }
}



export const infoCard = async (planet,eye,episode) => {
    try {
        let userPlanet = await getplanet(planet);
        let userEye = await eyecolor(eye)
        let userEpisode = await episodeInfo(episode)
        let element = document.createElement('div');
        element.classList.add('info-card-div');
        element.innerHTML = `
        <div>Planet : ${userPlanet.name}</div>
        <div>Character Eye Color : ${userEye.eyeColor}</div>
        <div>Episode : ${userEpisode.episode_id}</div>
        `
        document.querySelector('body').appendChild(element)
    } catch (error){
        console.log(error)
    }
}