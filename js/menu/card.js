//div внутри корзины, в котором мы добовляем товары
const cartWrapper = document.querySelector(".cart-wrapper");
//отслеживаем данные формы в соответствующие переменные
const Number_Input = document.querySelector("#Number_Input");
const Email_Input = document.querySelector("#Email_Input");

//создаем пустой массив для товаров в корзине
var CardArray = [];

//добовляю прослушку на всем окне
window.addEventListener("click", function (event) {
  //проверяем клик строго по кнопкам + или -
  if (event.target.hasAttribute("data-cart")) {
    //находим карточку с товаром, внутри которй был клик
    const card = event.target.closest(".card");

    //собираем данные с этого товара и записываем их в единый обьект productinfo
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".product-img").getAttribute("src"),
      title: card.querySelector(".item-title").innerText,
      itemsInBox: card.querySelector("[data-items-in-box]").innerText,
      weight: card.querySelector(".price__weight").innerText,
      price: card.querySelector(".price__currency").innerText,
      counter: card.querySelector("[data-counter]").innerText,
    };

    //проверем есть ли в корзине такой товар
    const itemInCart = cartWrapper.querySelector(
      `[data-id="${productInfo.id}"]`
    );

    // добовление товаров в массив (тех что в корзине)
    function AddToCardArray() {
      CardArray.push(
        `${productInfo.title},${productInfo.counter},${productInfo.price}`
      );
    }
    //если  товар есть в корзине
    if (itemInCart) {
      const counterElement = itemInCart.querySelector("[data-counter]");
      counterElement.innerText =
        parseInt(counterElement.innerText) + parseInt(productInfo.counter);
    } else {
      AddToCardArray();
      //если товара нет в корзине

      //собранные данные подставляем в шаблон для товара в корзине
      const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
    <div class="cart-item__top">
        <div class="cart-item__img">
            <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
        </div>
        <div class="cart-item__desc">
            <div class="cart-item__title">${productInfo.title}</div>
            <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>
            <!-- cart-item__details -->
            <div class="cart-item__details">
                <div class="items items--small counter-wrapper">
                    <div class="items__control" data-action="minus">-</div>
                    <div class="items__current current-arr" data-counter="">${productInfo.counter}</div>
                    <div class="items__control" data-action="plus">+</div>
                </div>
                <div class="price">
                    <div class="price__currency">${productInfo.price}</div>
                </div>
            </div>
            <!-- // cart-item__details -->
        </div>
    </div>
</div>`;

      //отобразим товар в корзине
      cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
    }
    //сбрасываем счетчик товара после добавления в корзину
    card.querySelector("[data-counter]").innerText = "1";
    //отображение статуса корзины. пустая или полная
    toogleCartStatus();
    //пересчет общей стоимости товаров в корзине
    calcCartPriceAndDelivery();
  }
});

//Логика отправки
function SubmitFormOrder(event) {
  // Отменяем перезагрузку страницы при отправке формы
  event.preventDefault();

  //валидация (проверка на пустые строки и корректность вводимых данных)
  if (Number_Input.value === "") {
    showNotification("Введите номер телефона!");
  } else if (!isValidPhone(Number_Input.value)) {
    showNotification("Введите корректный номер телефона!");
  } else if (Email_Input.value === "") {
    showNotification("Введите адрес почты!");
  } else if (!isValidEmail(Email_Input.value)) {
    showNotification("Введите корректный адрес почты!");
  } else {
    PushOrder();
  }
  const divs = document.querySelectorAll("div.cart-item__title");
  const divs2 = document.querySelectorAll("div.current-arr");
  const divs3 = document.querySelectorAll("span.total-price");
  // Создаём пустые массивы для данных о товарах
  const dataArray_title = [];
  const dataArray_cerrent = [];
  const dataArray_price = [];
  // Вытаскиваем содержимое div-ов
  divs.forEach((div) => {
    const data = div.textContent;
    dataArray_title.push(data);
  });
  divs2.forEach((div) => {
    const data = div.textContent;
    dataArray_cerrent.push(data);
  });
  divs3.forEach((div) => {
    const data = div.textContent;
    dataArray_price.push(data);
  });
  //Создаём массив названия и колличества товаров в корзине для отправки на post
  const datar = [dataArray_title, dataArray_cerrent];
  //Создаём массив цены товаров в корзине для отправки на post
  const data_price = [dataArray_price];
  //вписываем массивы в input формы для отправки на post
  document.querySelector("#myInput").value = datar;
  document.querySelector("#myInput2").value = data_price;
}

function PushOrder() {
  // Получаем данные формы
  var formData = $("#order").serialize();
  // Отправляем данные на сервер
  $.ajax({
    type: "POST",
    url: "/php/order.php",
    data: formData,
    success: function (response) {
      // Обработка успешного ответа от сервера
      console.log(response);
      // Выводим всплывающее уведомление
      showNotification("Успешно отправлено!");
      //очищаем форму после отправки
      $("#order")[0].reset();
      reloadPage();
    },
    error: function (xhr, status, error) {
      // Обработка ошибки при отправке данных на сервер
      console.log(status + ": " + error);
    },
  });
}

function reloadPage() {
  setTimeout(function () {
    location.reload();
  }, 4000);
}
