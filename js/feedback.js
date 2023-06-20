//функция отправки формы обратной связи
function submitForm(event) {
    // Отменяем перезагрузку страницы при отправке формы
    event.preventDefault();
    /*
    const form = document.querySelector('#formid');
    const emailInput = document.querySelector('#email-input');

*/


    
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


