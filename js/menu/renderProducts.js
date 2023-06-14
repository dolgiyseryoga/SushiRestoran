const productsContainer = document.querySelector('#products-container');

//Запускаем getProducts
getProducts();

//асинхронная функция получения данных из products.json
async function getProducts() {
    //получаем данные из products.json
    const response = await fetch('./js/menu/products.json');
    //парсим данные из json в js формат
    const productsArray = await response.json();
    //запускаем функцию рендера (отображаем товары)
    renderProducts(productsArray)
}

function renderProducts(productsArray) {

    productsArray.forEach(function(item) {

        const productHTML = `<div class="col-md-4">
        <div class="card mb-4" data-id="${item.id}">
            <img class="product-img" src="images/roll/${item.imgSrc}" alt="">
            <div class="card-body text-center">
                <h4 class="item-title">${item.title}</h4>
                <p><small data-items-in-box class="text-muted">${item.itemsInBox} шт.</small></p>

                <!--счетчик-->
                <div class="details-wrapper">
                    <div class="items counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter>1</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>
                    <!--//счетчик-->
                    <div class="price">
                        <div class="price__weight">${item.weight}г.</div>
                        <div class="price__currency">${item.price} BYN</div>
                    </div>
                </div>

                <button data-cart type="button" class="btn btn-block btn-outline-warning">+ в
                    корзину</button>

            </div>
        </div>
    </div>`;

    productsContainer.insertAdjacentHTML('beforeend',productHTML);
    });

}