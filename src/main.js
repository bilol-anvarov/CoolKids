export function hamburger() {
    let hamburger = document.querySelector('#hamburger');
    hamburger.classList.toggle('active')
    let header = document.querySelector('header');
    header.classList.toggle('active')
}
export function hoverToText() {
  let element = document.querySelector('#hoverElem');
  const text = element.textContent;

  // Разделение текста на массив слов
  const words = text.split(' ');

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

  // Добавление класса и обработчиков событий для каждой буквы в каждом слове
  const editedText = words.map(word => {
    const wordElement = document.createElement('span');
    word.split('').forEach(char => {
      const charElement = document.createElement('span');
      charElement.textContent = char;
      addAndRemoveClass(charElement);
      wordElement.appendChild(charElement);
    });
    const spaceElement = document.createElement('span');
    spaceElement.textContent = ' ';
    wordElement.appendChild(spaceElement);
    
    return wordElement;
  });

  // Очистка содержимого элемента и добавление отредактированного текста
  element.innerHTML = '';
  editedText.forEach(wordElement => element.appendChild(wordElement));
}
