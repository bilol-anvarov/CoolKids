export function hamburger() {
    let hamburger = document.querySelector('#hamburger');
    hamburger.classList.toggle('active')
    let header = document.querySelector('header');
    header.classList.toggle('active')
}

export function hoverToText() {
    let element = document.querySelector('#hoverElem');
    const text = element.textContent;
  
    // Разделение текста на массив символов
    const characters = text.split('');
  
    // Функция для добавления класса и удаления через несколько секунд
    function addAndRemoveClass(charElement) {
      charElement.addEventListener('mouseenter', () => {
        // Добавление класса при наведении
        charElement.classList.add('text-elastic');
  
        // Удаление класса через 2 секунды (или другое время, по вашему выбору)
        setTimeout(() => {
          charElement.classList.remove('text-elastic');
        }, 2000); // 2000 миллисекунд (2 секунды)
      });
    }
  
    // Добавление класса и обработчиков событий для каждой буквы
    const editedText = characters.map(char => {
      const charElement = document.createElement('span');
      charElement.textContent = char;
      addAndRemoveClass(charElement);
      return charElement;
    });
  
    // Очистка содержимого элемента и добавление отредактированного текста
    element.innerHTML = '';
    editedText.forEach(charElement => element.appendChild(charElement));
  }
  