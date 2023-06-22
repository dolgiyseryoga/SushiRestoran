const appId = '8c67e4ac3b3441deb98b0ae790d85ee7'; // ID  из сайта Open Exchange Rates
  
const url = `https://openexchangerates.org/api/latest.json?app_id=${appId}`;
  
fetch(url)
  .then(response => response.json())
  .then(data => {
    const rate = data.rates.USD / data.rates.BYN;
    
// Выводим курс на страницу
const myString = `Курс сегодня:<br><strong>1<strong> BYN: <strong>${rate.toFixed(2)}</strong> USD`;
// Получаем элемент div по его id
const DivRate = document.getElementById('rate');
// Вставляем строку в элемент div
DivRate.innerHTML = myString;
  })
  .catch(error => console.error(error));