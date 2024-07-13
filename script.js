const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');


const today = new Date();


const weekdays = ["sunday", "Monday", "Tuesday", "Wedensday", "Theresday", "Friday", "Saturday"];

const allMonths = ["january", "February", "March", "April", "May", "June", "July", "Agust", "September", "Octuber", "November", "Desember"
];

date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
day.innerHTML = weekdays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();