<?php
$number = $_POST['number'];
$arr = $_POST['arr'];

echo '<pre>';
print($arr);
echo '</pre>';

print($number);

$array = explode(",", $arr);



$Arr =  array_chunk($array,  3, $preserve_keys = false);
echo '<pre>';
print_r($Arr);
echo '</pre>';




// Подключаемся к базе данных
/*
$host = 'localhost';
$user = 'root';
$password = '';
$dbName = 'card_route';

$mysqli = mysqli_connect($host, $user, $password, $dbName);

if (!$mysqli) {
    die('Ошибка подключения: ' . mysqli_connect_error());
} else echo 'супер';


*/














/*
// Check for empty fields
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