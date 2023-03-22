const getCharacter = async (character) => {
    try {
        let response = await fetch(`https://swapi.dev/api/people/${character}`)
        let data = await response.json();
        return data
    } catch (error) {
        console.log(error);
    }
}
(async()=>{

    let luke = await getCharacter(1)

    console.log(luke)

})();

