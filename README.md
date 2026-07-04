# Weather App

A simple weather application built using HTML, CSS, and JavaScript. Users can search for any city to view the current weather conditions, including temperature, humidity, and wind speed.

Live Link: https://asifsaifi2006.github.io/simple_weather_app/

## Features

* Search weather by city name
* Display current temperature
* Display humidity percentage
* Display wind speed
* Dynamic weather icons based on weather conditions
* Responsive design for desktop and mobile devices

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Weather API (e.g., OpenWeatherMap)

## Project Structure

```
WeatherApp/
│── index.html
│── style.css
│── script.js
└── images/
    ├── search.png
    ├── humidity.png
    ├── wind.png
    └── ...
```

## Getting Started

1. Clone the repository.

```bash
git clone https://github.com/your-username/WeatherApp.git
```

2. Navigate to the project folder.

```bash
cd WeatherApp
```

3. If your project uses a weather API, add your API key in `script.js`.

```javascript
const apiKey = "bd772f646a9c66553e4b57058617f1a2";
```

4. Open `index.html` in your browser.

## Usage

1. Enter the name of a city in the search box.
2. Click the search button.
3. View the current weather information for the selected city.

## Future Improvements

* 5-day weather forecast
* Current location weather using Geolocation API
* Temperature unit conversion (°C / °F)
* Loading indicator
* Better error handling
* Dark and light theme support

## License

This project is available for educational and personal use.
