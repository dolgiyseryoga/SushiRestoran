//добовляю прослушку на всем окне
window.addEventListener('click', function(event) {
//объявляем переменную для счетчика
let counter;
//проверяем клик строго по кнопкам + или -
if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
//находим обвертку счетчика
    const counterWrapper =  event.target.closest('.counter-wrapper');
//находим div с числом счетчика
    counter =  counterWrapper.querySelector('[data-counter]')
}
//проверяем является ли элемент по которому мы кликнули кнопкой плюс 
if (event.target.dataset.action === 'plus'){
        counter.innerText =  ++counter.innerText;
    }
//проверяем является ли элемент по которому мы кликнули кнопкой минус 
if (event.target.dataset.action === 'minus'){
    //проверяем чтобы счетчик был больше 1
    if(parseInt(counter.innerText) > 1){


    //изменяем текст всчетчике уменьшая его на 1
    counter.innerText =  --counter.innerText;
    //проверка на товар который находится в корзине
    } else if (event.target.closest('.cart-wrapper')  && parseInt(counter.innerText) === 1) {
    //удаляем товар из корзины
    event.target.closest('.cart-item').remove();
    
    //отображение статуса корзины. пустая или полная
    toogleCartStatus();
   //запускаем общий пересчет стоимости товаров внутри корзины
   calcCartPriceAndDelivery();    
        }
    }

    //проверяем на = или - внутри корзины
    if( event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
    //запускаем общий пересчет стоимости товаров внутри корзины
    calcCartPriceAndDelivery();   
}
});

