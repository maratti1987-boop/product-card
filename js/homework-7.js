
function showTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию.`);
}


const SPEED_OF_LIGHT = 299792458 ;

function checkSpeedOfLight(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else  if (speed < SPEED_OF_LIGHT) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света ");
  }
}


const product = "Лыжи";
const price = 1000;

function buyProduct (budget) {
  if (budget >= price) {
    console.log(`${product} приобретен. Спасибо за покупку!`);
  } else {
    const difference = price - budget;
    console.log(`Вам не хватает ${difference} $, пополните баланс`);
  }
}


function calculateSalary(base = 2000, bonus = 500) {
const totalSalary = base + bonus;
}

calculateSalary();



const city = "Бугульма";
const region = "Татарстан";
const country = "Россия";

function displayLocation(city, region, country) {
// console.log(`Город: ${city}, Регион: ${region}, Страна: ${country}`);
}
displayLocation(city, region, country);
