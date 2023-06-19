<?php
$Name = $_POST['NameF'];
$Email_address = $_POST['EmailF'];
$Message = $_POST['MessageF'];

// Создаём форму письма и отправляем
$to = 'test@gmail.com';
$email_subject = "Обратная связь с сайта суширесторан:  $Name";
$email_body = "Вы получили новое сообщение.\n\n" . "Подробности:\n\nName: $Name\n\nEmail: $Email_address\n\nMessage:\n$Message";
$headers = "Для: test@gmail.com\n";
$headers .= "Reply-To: $Email_address";
mail($to, $email_subject, $email_body, $headers);
return true;
