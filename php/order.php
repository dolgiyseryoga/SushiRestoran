<?php
$number = $_POST['number'];
$email = $_POST['email'];
$arr = $_POST['arr'];

//Делим массив по запятым
$array = explode(",", $arr);

//Разбираем массив соответственно на 2 массива ключ-значение (товар - цена)
$numbers = array();
$strings = array();

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

echo '<pre>';
print_r($result);
echo '<pre>';

// Формируем тело письма

foreach ($result as $key => $value) {
    $body_core .=    "\r\n" . ucfirst($key) . ": " . $value . " шт." . "\r\n";
}

$text = "\r\n" . 'В ближайшее время по номеру ' . $number . ' с вами свяжется наш оператор для подтверждения заказа.' . "\r\n" . 'Хорошего настроения!';

$body = 'Заказ успешно оформлен! В Ваш заказ вхотит:' . $body_core . $text;




// Формируем заголовки письма
$headers = "From: example@example.com\r\n";
$headers .= "Reply-To: example@example.com\r\n";
$headers .= "Content-type: text/plain; charset=utf-8\r\n";

// Отправляем письмо
mail("recipient@example.com", "Вам писбмо с сайта Sushirestoran!", $body, $headers);

















/*// Check for empty fields
if (
    empty($_POST['number'])        ||
    empty($_POST['email'])       ||
    empty($_POST['message'])   //||
    // !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)
) {
    echo "No arguments Provided!";
    return false;
}

$number = $_POST['number'];
$email_address = $_POST['email'];
$message = $_POST['message'];

// Create the email and send the message
$to = 'test@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $number";
$email_body = "Вы получили новое сообщение.\n\n" . "Подробности:\n\nName: $number\n\nEmail: $email_address\n\nMessage:\n$message";
$headers = "From: test@gmail.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to, $email_subject, $email_body, $headers);
return true;
*/


/*
$Arr =  array_chunk($array,  3, $preserve_keys = false);
echo '<pre>';
print_r($array);
echo '</pre>';
*/
