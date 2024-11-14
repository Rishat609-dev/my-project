// Поиск по ключевому слову
document.querySelector('.banner button').addEventListener('click', function () {
    const searchInput = document.querySelector('.banner input[type="text"]').value;
    if (searchInput.trim()) {
        alert(`Поиск автомобилей по запросу: "${searchInput}"`);  // Использование обратных кавычек для строки с переменной
    } else {
        alert("Введите ключевое слово для поиска.");
    }
});
// Модальное окно регистрации
const modal = document.getElementById('registerModal');
const openBtn = document.getElementById('openRegister');
const closeBtn = document.querySelector('.modal .close');

// Открытие модального окна
openBtn.onclick = function () {
    modal.style.display = "flex";
};

// Закрытие модального окна
closeBtn.onclick = function () {
    modal.style.display = "none";
};

// Закрытие окна при клике вне его области
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Регистрация пользователя
document.getElementById('registerButton').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        alert(`Пользователь ${username} успешно зарегистрирован!`);  // Использование обратных кавычек для строки с переменной
        modal.style.display = "none";
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
});
