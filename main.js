// Изменение цвета всех карточек

const productCards = document.querySelectorAll('.products__item.card');
const changeAllCardsColorButton = document.querySelector('#change-all-cards-color-button');

changeAllCardsColorButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = 'lightblue');
});

// Изменение цвета первой карточки

const firstProductCard = document.querySelector('.products__item.card');
const changeFirstCardColorButton = document.querySelector('#change-first-card-color-button');

changeFirstCardColorButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = 'lightgreen';
});

// Открытие Google в новом окне

const openGoogleButton = document.querySelector('#open-google-button');
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle(){
  const answer = confirm('Вы хотите открыть Google?');
  if (answer === true) {
    window.open('https://www.google.com');
  } else {return;
}
}

// Вывод сообщения в консоль

const outputConsoleLogButton = document.querySelector('#output-console-log-button');
outputConsoleLogButton.addEventListener('click', () => {
  outputConsoleLog('ДЗ №6');
});

function outputConsoleLog(message) {
  alert(message)
  console.log(message);
}

// Вывод текста заголовка в консоль при наведении

const title = document.querySelector('.catalog__title');

title.addEventListener('mouseenter', () => {
  console.log(title.textContent);
});


// Переключение цвета кнопки

const colorToggleButton = document.querySelector('#color-toggle-button');

colorToggleButton.addEventListener('click', () => {
   colorToggleButton.classList.toggle('color-toggle-button--active');
});