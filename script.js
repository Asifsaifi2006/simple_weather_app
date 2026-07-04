let input = document.getElementById('inp');
let btn = document.querySelector('.searchBtn');
let p = document.querySelector('.error');
p.style.color = 'red';

document.querySelector('.city').innerText = 'Delhi';
document.querySelector('.temp').innerText = '34°C';
document.querySelector('.humidity .text').innerText = '46%';
document.querySelector('.weatherImg').src = "/WeatherApp/images/clouds.png";
document.querySelector('.wind .text').innerText = '1.38 km/h';

const url = 'https://api.openweathermap.org/data/2.5/weather?q='
async function getWeather(city) {
    const response =  await fetch(url + `${city}&appid=bd772f646a9c66553e4b57058617f1a2`);
    const data = await response.json();

    
    if(data.message == 'city not found' || response.status == 404){
        p.innerText = 'Invalid city name!';
    }else{
        p.innerText = ''
        document.querySelector('.city').innerText = data.name;
        document.querySelector('.temp').innerText =  Math.floor(data.main.temp - 273.15)+"°C"
        
        if(data.weather[0].main == 'Clouds'){
            document.querySelector('.weatherImg').src = "/WeatherApp/images/clouds.png" 
        }else if(data.weather[0].main == 'Clear'){
            document.querySelector('.weatherImg').src = "/WeatherApp/images/clear.png"
        }else if(data.weather[0].main == 'Drizzle'){
            document.querySelector('.weatherImg').src = "/WeatherApp/images/drizzle.png"
        }else if(data.weather[0].main == 'Rain'){
            document.querySelector('.weatherImg').src = "/WeatherApp/images/rain.png"
        }else if(data.weather[0].main == 'Mist'){
            document.querySelector('.weatherImg').src = "/WeatherApp/images/mist.png"
        }else if(data.weather[0].main == 'Snow'){
            document.querySelector('.weatherImg').src = "/WeatherApp/images/snow.png"
        }

        console.log(data.weather[0].main);

        document.querySelector('.humidity .text').innerText = data.main.humidity+"%"
        document.querySelector('.wind .text').innerText = Math.round(data.wind.speed*1.6)+" km/h"
    }
}

btn.addEventListener('click', ()=>{
    let city = input.value;
    if(city.trim() == ""){
        p.innerText = 'Invalid city name!';
    }else{
        getWeather(city);
        input.value = ''
    }
});

input.addEventListener('keydown', (e)=>{
    if(e.key == 'Enter'){
        let city = input.value;
        if(city.trim() == ""){
            p.innerText = 'Invalid city name!';
        }else{
            getWeather(city);
            input.value = '';
        }
    }
});


