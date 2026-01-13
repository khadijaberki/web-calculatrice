const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if (button.id === 'clear') {
            display.value = '';
        } else if (button.id === 'equals') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Erreur';
            }
        } else {
            display.value += value;
        }
    });
});
