const apikey = "475d48afd46c68db5525100c1de69c70";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl+city +`&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }else{
        var detaweather = await response.json();

    console.log(detaweather)

    document.querySelector(".city").innerHTML = detaweather.name;
    document.querySelector(".temp").innerHTML = Math.round(detaweather.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML = detaweather.main.humidity + " %";
    document.querySelector(".wind").innerHTML = detaweather.wind.speed + " km/h";
    
    if(detaweather.weather[0].main == "Clouds"){
        weathericon.src = "img/clouds.png";
    }
    else if(detaweather.weather[0].main == "Rain"){
        weathericon.src = "img/rain.png";
    }
    else if(detaweather.weather[0].main == "Clear"){
        weathericon.src = "img/clear.png";
    }
    else if(detaweather.weather[0].main == "Drizzle"){
        weathericon.src = "img/drizzle.png";
    }
    else if(detaweather.weather[0].main == "Mist"){
        weathericon.src = "img/mist.png";
    }
 
    }

}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})
// so the user can search with just enter keyboard btn not just the search button
searchbox.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        checkWeather(searchbox.value);
    }
});





