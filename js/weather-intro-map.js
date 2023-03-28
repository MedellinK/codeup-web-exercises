// $.get("https://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     q:     "San Antonio, US"
// }).done(function(data) {
//     console.log(data);
// });
//

const SALong = -98.4936
const SALat = 29.4241

// $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${SALat}&lon=${SALong}&appid=${OPEN_WEATHER_APPID}&units=imperial`).done
// (data=>{
//     console.log(data)
//     console.log("The temperature is: " + data.main.temp)
//     $("#weather").html(`<p>The temperature is:  ${data.main.temp}</p>`)
// })

// $(`api.openweathermap.org/data/2.5/forecast?lat=${SALat}&lon=${SALong}&appid=${OPEN_WEATHER_APPID}&units=imperial`).done
// (data => console.log(data));

$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: OPEN_WEATHER_APPID,
    lat:    SALat,
    lon:   SALong,
    units: "imperial"
}).done(function(data) {
    console.log(data);
    data.list.forEach((forecast, index)=> {
        if(index % 8 === 0 && index !== 0){
            const time = new Date(forecast.dt * 1000)
            console.log(time.getHours());
            console.log(time.getTime());
            console.log(time.getDay());
            console.log(forecast.dt_text);
            console.log(forecast.weather[0].description);
        }
    });
});
//
// $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${SALat}&lon=${SALong}&appid=${OPEN_WEATHER_APPID}&units=imperial`).done(data=>{
//     console.log(data);
//     data.list.forEach(forcast =>{
//         console.log(forcast.dt_txt);
//         console.log(forcast.weather[0].description)
//     })
// });
