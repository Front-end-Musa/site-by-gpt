// Получаем текущий год и выводим его на странице
const year = new Date().getFullYear();
document.getElementById('year').textContent = year;

// Плавная прокрутка страницы при клике на ссылки в навигации
const navLinks = document.querySelectorAll('nav ul li a');

for (const link of navLinks) {
    link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
        top: offsetTop,
        behavior: 'smooth'
    });
}

// Отправка формы и вывод сообщения об успешной отправке
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', submitHandler);

function submitHandler(e) {
    e.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;
    alert(`Спасибо, ${name}! Ваше сообщение успешно отправлено. Мы свяжемся с вами по адресу ${email} в ближайшее время.`);
    form.reset();
}