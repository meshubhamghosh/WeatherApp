//https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=01a3404d0814a8f7a802626ea3f8e28a

let city="";
const apiKey = "01a3404d0814a8f7a802626ea3f8e28a";
let apiUrl="https://api.openweathermap.org/data/2.5/weather?q=";
weatherIcon= document.querySelector(".weatherIcon");
humidityIcon= document.querySelector(".humidityIcon");
windSpeed= document.querySelector(".windSpeed");



async function checkWeather (city){
    const response = await fetch(apiUrl+`${city}`+"&appid="+`${apiKey}`);
    var data = await response.json();
    weatherIcon.src = `icon-img/${data.weather[0].icon}@2x.png`;

    humidityIcon.src = `humidity.png`;

    windSpeed.src = `windy.png`;

    document.querySelector(".cityresponse").innerHTML=data.name;
    
    document.querySelector(".citytemp").innerHTML=Math.round(data.main.temp - 273.15).toString() + '&#8451';
    
    document.querySelector(".humidity").innerHTML="Humidity: "+data.main.humidity.toString()+"%";

    document.querySelector(".wind-speed").innerHTML="Wind Speed: "+data.wind.speed.toString()+"m/s";


}


const buttonElement = document.querySelector(".get-btn");
buttonElement.addEventListener("click",()=>{
city = document.querySelector(".cityname").value;
checkWeather(city);
});