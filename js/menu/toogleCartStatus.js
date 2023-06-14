function toogleCartStatus(){
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBabge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');

//если число товаров в корзине больше 0 / показываем и скрываем формы
    if(cartWrapper.children.length > 0){
        cartEmptyBabge.classList.add('none');
        orderForm.classList.remove('none');
    } else {
        cartEmptyBabge.classList.remove('none');
        orderForm.classList.add('none');
    }
}

