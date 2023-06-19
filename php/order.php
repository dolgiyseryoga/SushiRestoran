<?php
$number = $_POST['number'];
$email  = $_POST['email'];
$arr    = $_POST['arr'];
$arr2   = $_POST['arr2'];

//Делим массив по запятым
$array = explode(",", $arr);

//Разбираем массив соответственно на 2 массива ключ-значение (товар - цена)
$numbers = array();
$strings = array();
//сортируем текст и числа
foreach ($array as $value) {
    if (is_numeric($value)) { // проверяем, является ли элемент числом
        $numbers[] = intval($value); // если да, добавляем его в массив чисел
    } else {
        $strings[] = $value; // иначе добавляем его в массив строк
    }
}
//Создаем массив товар-цена
$keys = $strings;
$values = $numbers;
$result = array_combine($keys, $values);

// Формируем тело письма
foreach ($result as $key => $value) {
    $body_core .=    "\r\n" . ucfirst($key) . ": " . $value . " шт." . "\r\n";
}
$text = "\r\n" . 'Сумма вашего заказа состовляет: ' . $arr2 .  ' BYN. ' . "\r\n" . 'В ближайшее время по номеру ' . $number . ' с вами свяжется наш оператор для подтверждения заказа.' . "\r\n" . 'Хорошего настроения!';
$body = 'Заказ успешно оформлен! В Ваш заказ вхотит:' . $body_core . $text;

// Формируем заголовки письма
$headers = "From: example@example.com\r\n";
$headers .= "Reply-To: example@example.com\r\n";
$headers .= "Content-type: text/plain; charset=utf-8\r\n";

// Отправляем письмо
mail("recipient@example.com", "Вам писбмо с сайта Sushirestoran!", $body, $headers);
