const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=05510e353b076ec46e67c531e60f2e9a&units=imperial";

fetch(apiURL)
    .then(
        (response)=> response.json()
    
    )

    .then(
        (currentWeather) => {
           // console.log(currentWeather.main.temp)
            let currentTemp = currentWeather.main.temp;
            let windSpeed =currentWeather.wind.speed;
            let windChill;

            if (currentTemp < 50 && windSpeed > 3){
                windChill = 35.74 + .6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp
                 * Math.pow(windSpeed,.16);
                }
                
                document.getElementById("currentTemp").innerHTML = currentTemp + '&deg';
                document.getElementById("windSpeed").innerHTML = windSpeed + " mph"
                
            if(windChill === 0){
                document.getElementById("windChill").innerHTML = 'N/A'
                }
            else{
                document.getElementById("windChill").innerHTML = Math.round(windChill) + '&deg';
                
                }
            }
        );






