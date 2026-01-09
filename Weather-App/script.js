const city_name = document.getElementById('city_name');
const weather_btn = document.getElementById("weather_btn");
const message = document.getElementById("message");
const weather_out = document.getElementById("weather-output");

weather_btn.addEventListener("click",get_weather);

async function get_weather(){
    if(city_name.value === '')
    {
        message.textContent = 'Enter a city name!';
        return;
    }
    data = await fetchWeatherData(city_name.value);

    message.innerHTML = '';
    weather_out.innerHTML = '';

    let city = document.createElement("h3");
    city.textContent = data.cityName;

    let temp= document.createElement("p");
    temp.textContent = data.temperature;

    let temp_icon = document.createElement("img");
    temp_icon.alt = "temp-icon";
    temp_icon.src = data.weatherIcon;

    weather_out.append(city,temp,temp_icon);
    console.log(data);
}

async function fetchWeatherData(city) {
    try{
        const apiKey = '18304cc9de27933527793eda45e77bdd';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;   
        const response = await fetch(url);

        if(!response.ok)
        {
            message.textContent = 'Enter a valid city name';
        }

        const data = await response.json();
        mappedData = {
            cityName: data.name,
            temperature: data.main.temp,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            weatherDescription: data.weather[0].description,
            weatherIcon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        };
        console.log(mappedData);
        return mappedData;
    }
    catch(error)
    {
        console.log(error);
    }
    
}