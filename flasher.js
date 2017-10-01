//
//ДЗ2: пользуясь примером с рекурсией и ссылками на Гугл/Фб сделать мигалочку, у мигалочки 4 цвета, меняются в случайном порядке.
//
//исп. switch/case

;
(function () {
    'use strict'
    
    const changeColor = function() {
    let randomNumber = Math.floor(Math.random() * (5 - 1) + 1);
    switch (randomNumber) {
    case 1: 
    document.querySelector('body').style.backgroundColor = 'green';
    setTimeout(function(){changeColor()}, 2000);  
    break;
    case 2: 
    document.querySelector('body').style.backgroundColor = 'red';
    setTimeout(function(){changeColor()}, 2000);  
    break;
    case 3: 
    document.querySelector('body').style.backgroundColor = 'yellow';
    setTimeout(function(){changeColor()}, 2000);  
    break;
    default:
    document.querySelector('body').style.backgroundColor= 'pink';
    setTimeout(function(){changeColor()}, 2000);  
    }       
}
changeColor();
    
 })();