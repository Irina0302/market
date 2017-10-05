;
(function () {
    'use strict'

    let appElement = document.getElementById('app');

    let cart = document.createElement('div');
    cart.id = 'cart';

    appElement.append(cart);
    cart.dataset.productsCount = 0;
    let totalPrice = 0;

    let products = document.querySelectorAll('.stuff');

    // for (let i = 0; i < products.length; ++i) {
        //let product = products[i];
        //product
    // }

    // for (let index in products) {
        //let product = products[index];
        //product
    // }

    products.forEach(function(product) {
        let cartEntry = document.createElement('div');
        cartEntry.dataset.productId = product.id;
        cartEntry.dataset.discount = Math.floor(Math.random() * (5 - 1) + 1);

        let cartEntryTitle = product.querySelector('.stuff__title').innerText;
        cartEntry.title = cartEntryTitle;
        cartEntry.innerHTML = '<h4>' + cartEntryTitle + '</h4>';

        let cartEntryCounter = document.createElement('input');
        cartEntryCounter.type = 'number';
        cartEntryCounter.value = Math.floor(Math.random() * (5 - 1) + 1);
        cartEntry.append(cartEntryCounter);

        let cartEntryPrice = document.createElement('h5'); 
        let cartEntryPriceValue = product.querySelector('.stuff__content-price').innerText; 
        cartEntryPrice.innerText = parseInt(cartEntryPriceValue) * cartEntryCounter.value;
        cartEntry.append(cartEntryPrice);
        
        	  let carEntryDiscount = document.createElement('h5');//create h5 elem
			  //Put in carEntryDiscountVelue random number of discont
        let carEntryDiscountVelue = 'Your discount: ' + cartEntry.dataset.discount + ' %';
			  //write down the value into h5 elem
			  carEntryDiscount.innerText = carEntryDiscountVelue ;
			 //put h5 elem into div
			  cartEntry.append(carEntryDiscount);
        let carPriceWithDiscont = document.createElement('h5');
			  let carPriceWithDiscontValue =(parseInt(cartEntryPriceValue) * cartEntryCounter.value) - (parseInt(cartEntryPriceValue) * cartEntryCounter.value) * ( (cartEntry.dataset.discount) / 100);
			  carPriceWithDiscont.innerText = 'Your price with discont: ' + carPriceWithDiscontValue;
			  cartEntry.append(carPriceWithDiscont);
						
 
        totalPrice += parseInt(cartEntryPrice.innerText);
        cart.dataset.productsCount = parseInt(cart.dataset.productsCount) + parseInt(cartEntryCounter.value);
        
        cart.append(cartEntry);
    });

    let totals = document.createElement('h2');
    totals.id = 'totals';
    totals.innerText = totalPrice;
    cart.append(totals);

})();

const btn = document.getElementsByClassName('stuff__btn')[0];
	let click  = function(){alert('success');}
btn.onclick=click;
click = function(){
	console.log(this)
}
click = function(){console.log(this.dataset.productId)};