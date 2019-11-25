var today = new Date();
var currentDateString;

// get day of week
var weekDayNumber = today.getDay();

var daysOfWeek =[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

var weekDay = daysOfWeek[weekDayNumber];

currentDateString = weekDay + ', ';

currentDateString  = currentDateString + currentDate.getDate();


// create 5 day forecast
let dayOfWeek= weekDayNumber;

for(let i = 1; i < 6; i++){
    dayOfWeek++;

    if(dayOfWeek > 6){
        dayOfWeek = 0;
    }

    const element = document.getElementById(`day${i}`);
    //const element = document.getElementById(`day${i}`);
    element.innerHTML = daysOfWeek[dayOfWeek];
    
}

// show/hide pancake
if(weekDayNumber == 5){
    document.getElementById("pancake").removeAttribute("class","hidden");
}


const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=05510e353b076ec46e67c531e60f2e9a&units=imperial";

fetch(apiForecastURL)
    .then(
        (response) => response.json()
    )
    
    .then(
        (forecasts) => {

            let nextDate = new Date();
                //nextDate.setDate(nextDate.getDate()+1);
                let dateString = getDateString(nextDate);
                let hourString = '18:00:00';
                let counter = 1;

        console.log(dateString);

            //Loop through results
            forecasts.list.forEach(
                (forecast) => {
                    if (forecast.dt_txt.includes(dateString)&&
                        forecast.dt_txt.includes(hourString)){

                        const element = document.getElementById(`temp${counter}`);
                        element.innerHTML = forecast.main.temp + '&deg';

                        counter +=1;
                        nextDate.setDate(nextDate.getDate()+1);
                        dateString = getDateString(nextDate);


                }
            }
        );
    }
);

function getDateString(date){

    let dateString=

    date.getFullYear()+ '-'+

    (date.getMonth()+1)+ '-'+

    date.getDate();

    return dateString;
}