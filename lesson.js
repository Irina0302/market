//Используем рекрсию в функции вызываю саму функции и иетод   setTimeout(function(){(временной промежуток измеряеться в //милисекундах)//



;
(function () {
    'use strict';

    let appElement = document.getElementById('app');
    let linkElement = document.createElement('a');
    linkElement.href = 'https://www.google.com';
    linkElement.title = 'Go to Google';
    linkElement.innerText = 'Google';

    appElement.append(linkElement);

    const changeState = function (element, currState, stopOn) {
        if (currState) {
            element.href = 'https://www.google.com';
            element.title = 'Go to Google';
            element.innerText = 'Google';
        } else {
            element.href = 'https://www.facebook.com';
            element.title = 'Go to FB';
            element.innerText = 'Facebook';
        }
        console.log(stopOn);
        if (stopOn > 0) {
            setTimeout(function () {
                changeState(element, !currState, --stopOn);
            }, 2000);
        }
    }

    changeState(linkElement, false, 10);

})();
