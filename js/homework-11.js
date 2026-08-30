// Уровень 1: задание 4

const form = document.getElementById("subscribe-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const email = formData.get("email");
  if (!email) {
    console.log("Ошибка: email пустой");
    return;
  }
  console.log({ email });
});

// Уровень 2: задание 5(1)

const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("modal-showed");
  overlay.classList.add("overlay-showed");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
});

overlay.addEventListener("click", () => {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
});

// Уровень 2: задание 5(2)

const registrationForm = document.getElementById("registrationForm");

let user=null;

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

   if (!registrationForm.checkValidity()) {
    console.log("Ошибка: форма невалидна");
    return;
  }

  const formData = new FormData(registrationForm);

  const password = formData.get("password");
  const repeatPassword = formData.get("repeatPassword");

  if (password !== repeatPassword) {
    console.log("Ошибка: пароли не совпадают");
    return;
  }

  const user = Object.fromEntries(formData.entries());
  user.createdOn = new Date();

  console.log("Регистрация успешна:", user);

  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");

  registrationForm.reset();
});