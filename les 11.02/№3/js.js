const validLogin = 'Carb';
const validPassword = 'qwert';

const inputLogin = document.getElementById('form__login');
const inputPassword = document.getElementById('form__password');
const submit = document.getElementById('form__submit');

const chechAge = () => {
    if (inputLogin.value !== validLogin && inputPassword.value == validPassword) {
        alert('Неверный логин');
    }

    if (inputLogin.value == validLogin && inputPassword.value !== validPassword) {
        alert('Неверный пароль');
    }

    if (inputLogin.value !== validLogin && inputPassword.value !== validPassword) {
        alert('Ошибка валидации');
    }
} 

submit.addEventListener('click', () => {
    chechAge();
});