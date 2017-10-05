ДЗ2: пользуясь примером с рекурсией и ссылками на Гугл / Фб сделать мигалочку, у мигалочки 4 цвета, меняются в случайном порядке.

исп.switch /
    case

;
(function () {
    'use strict'

    const changeColor = function () {
        let randomNumber = Math.floor(Math.random() * (5 - 1) + 1);
        setTimeout(function () {
            changeColor()
        }, 2000);
        switch (randomNumber) {
            case 1:
                document.querySelector('body').style.backgroundColor = 'green';

                break;
            case 2:
                document.querySelector('body').style.backgroundColor = 'red';

                break;
            case 3:
                document.querySelector('body').style.backgroundColor = 'yellow';

                break;
            default:
                document.querySelector('body').style.backgroundColor = 'pink';

        }
    }
    changeColor();

})();
