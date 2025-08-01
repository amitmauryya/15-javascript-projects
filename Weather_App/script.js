const apiKey = "6e8edfd31e487db1249a9640f9e59f9e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector("#search input");
const searchBtn = document.querySelector("#search button");

const weather_img = document.querySelector("#weather_img img")


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp)+"&degC";
    document.querySelector("#Humidityval").innerHTML = data.main.humidity +"%";
    document.querySelector("#windspeed").innerHTML = data.wind.speed +" km/h";
   
    if (data.weather[0].main == "Clouds") {
        weather_img.src = "./clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weather_img.src = "./clear.png";
    }
   else if (data.weather[0].main == "Rain") {
        weather_img.src = "./rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weather_img.src = "./drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weather_img.src = "./mist.png";
    }






}


searchBtn.addEventListener("click", function(){
    checkWeather(searchBox.value); 
})
