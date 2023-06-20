
//Функция показа уведомления
function showNotification(message) {
    // Создаем новый элемент div для уведомления
    var notification = document.createElement('div');

    // Добавляем текст в уведомление
    notification.innerHTML = message;
    
    // Устанавливаем стили для уведомления
    notification.style.position = 'fixed';
    notification.style.bottom = '50px';
    notification.style.right = '50px';
    notification.style.padding = '20px';
    notification.style.backgroundColor = '#fff';
    notification.style.border = '3px solid #000';
    
    // Добавляем уведомление на страницу
    document.body.appendChild(notification);
    
    // Закрываем уведомление через 3 секунды
    setTimeout(function() {
      notification.remove();
    }, 3000);
  }


