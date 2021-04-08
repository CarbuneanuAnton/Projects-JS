const input = document.getElementById('input');

input.addEventListener('blur', () => {
    if (Number.isInteger(+input.value) == false) {
        input.value = '';
    }
});