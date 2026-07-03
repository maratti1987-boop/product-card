
// Температура в Каире

function askTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура - ${temperature} градусов по Цельсию.`);
}
askTemperature("Каире", 25);


// Скорость света

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

checkSpeedOfLight(300000000);
checkSpeedOfLight(200000000);
checkSpeedOfLight(299792458);


// Приобретаем товар 

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

buyProduct(1500);
buyProduct(800);


//Создание функции для расчета зарплаты

function calculateSalary(base = 2000, bonus = 500) {
  console.log(`Ваш оклад: ${base} $`);
  console.log(`Ваша премия: ${bonus} $`);
  const totalSalary = base + bonus;
  console.log(`Ваша зарплата: ${totalSalary} $`);
}

calculateSalary();



const city = "Бугульма";
const region = "Татарстан";
const country = "Россия";

function displayLocation(city, region, country) {
  console.log(`Город: ${city}, Регион: ${region}, Страна: ${country}`);
}
displayLocation(city, region, country);
