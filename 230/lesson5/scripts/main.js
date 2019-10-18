var currentDate = new Date();
var currentDateString;

// get day of week
var weekDayNumber = currentDate.getDay();

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

var months =[
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

var monthNumber = currentDate.getMonth();
var month = months[monthNumber];

currentDateString += ' ' + month;

currentDateString += ' ' + currentDate.getFullYear();

document.getElementById('currentDate').innerHTML = currentDateString;

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

// create 5 day forecast
let day1, day2, day3, day4, day5, day6;

if (weekDayNumber < 6){
    day1 = daysOfWeek[weekDayNumber +1];
    document.getElementById("day2").innerHTML = day2;
}