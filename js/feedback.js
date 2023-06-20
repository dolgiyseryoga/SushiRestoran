    const form = document.querySelector('#formid');
    const NameInput = document.querySelector('#NameF');
    const EmailInput = document.querySelector('#EmailF');
    const MessageInput = document.querySelector('#MessageF');

//функция отправки формы обратной связи
function submitForm(event) {
    // Отменяем перезагрузку страницы при отправке формы
    event.preventDefault();
    
    //валидация (проверка на пустые строки и корректность вводимых данных)
    if (NameInput.value === '') {
        showNotification('Введите имя!');
    } else if (!isValidName(NameInput.value)) {
        showNotification('Введите корректное имя!');
    } else if (MessageInput.value === '') {
        showNotification('Введите сообщение!');
    } else if (EmailInput.value === '') {
        showNotification('Введите адрес почты!');
    } else if (!isValidEmail(EmailInput.value)) {
        showNotification('Введите корректный адрес почты!');
    } else {
        PuchFeedback();
    }
}

function PuchFeedback() {
            // Получаем данные формы
            var formData = $('#formid').serialize();
            // Отправляем данные на сервер
            $.ajax({
              type: 'POST',
              url: '/php/feedback.php',
              data: formData,
              success: function(response) {
                // Обработка успешного ответа от сервера
                console.log(response);
                // Выводим всплывающее уведомление
                showNotification('Успешно отправлено!');
                //очищаем форму после отправки
                $('#formid')[0].reset();
              },
              error: function(xhr, status, error) {
                // Обработка ошибки при отправке данных на сервер
                console.log(status + ': ' + error);
              }
            });
        } 

//функция валидации (проверка на корректный email)
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidName(name) {
    return /^([а-яА-Яa-zA-Z]+)$/u.test(name);
}
