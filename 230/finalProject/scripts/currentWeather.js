const apiURL1 = "https://api.openweathermap.org/data/2.5/weather?id=5542758&appid=05510e353b076ec46e67c531e60f2e9a&units=imperial";

fetch(apiURL1)
    .then(
        (response)=> response.json()
    
    )

    .then(
        (currentWeather) => {
           // console.log(currentWeather.main.temp)
            let currentTemp = currentWeather.main.temp;
          
                
                
                document.getElementById("currentTemp1").innerHTML = currentTemp + '&deg';
            
            }
        );


const apiURL2 = "https://api.openweathermap.org/data/2.5/weather?id=5780993&appid=05510e353b076ec46e67c531e60f2e9a&units=imperial";

fetch(apiURL2)
    .then(
        (response)=> response.json()
    
    )

    .then(
        (currentWeather) => {
           // console.log(currentWeather.main.temp)
            let currentTemp = currentWeather.main.temp;
          
                
                
                document.getElementById("currentTemp2").innerHTML = currentTemp + '&deg';
            
            }
        );

const apiURL3 = "https://api.openweathermap.org/data/2.5/weather?id=5391811&appid=05510e353b076ec46e67c531e60f2e9a&units=imperial";

fetch(apiURL3)
    .then(
        (response)=> response.json()
    
    )

    .then(
        (currentWeather) => {
           // console.log(currentWeather.main.temp)
            let currentTemp = currentWeather.main.temp;
          
                
                
                document.getElementById("currentTemp3").innerHTML = currentTemp + '&deg';
            
            }
        );

const apiURL4 = "https://api.openweathermap.org/data/2.5/weather?id=5664535&appid=05510e353b076ec46e67c531e60f2e9a&units=imperial";

fetch(apiURL4)
    .then(
        (response)=> response.json()
    
    )

    .then(
        (currentWeather) => {
           // console.log(currentWeather.main.temp)
            let currentTemp = currentWeather.main.temp;
          
                
                
                document.getElementById("currentTemp4").innerHTML = currentTemp + '&deg';
            
            }
        );



