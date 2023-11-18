// ---------   ИНСТУРКЦИЯ --------- \\
// Надо подключить библиотеку с анимациями \\
// Вставить вот этот код в html в тег <head>
/*

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">

*/

// Этот файл должен находиться рядом с основным js файлом
// В основной js файл втставить вот этот код 

/* 

import { onScrollAndLoad } from '../../animations';

window.addEventListener('load', onScrollAndLoad);
window.addEventListener('scroll', onScrollAndLoad);


*/



// теперь при добавление классов таких как 
/*

.fade-in
.fade-out
.fade-left
.fade-right
.fade-up
.fade-down

//--- дополнительно "fade" можно заменить на: ---\\

--- slide
--- zoom 
--- bounce
--- rotate
*/

function handleAnimation(classAnimName, animationClass) {
    let elements = document.querySelectorAll(classAnimName);
    // цикл

    // Проверка наличия элемента
    if (!elements || elements.length === 0) {
        return;
    }
    for(let i = 0; i < elements.length; i++){
        let element = elements[i]
        const pageYOffset = window.pageYOffset;
        let elementHeight = element.offsetHeight;
        let elementOffset = offset(element).top; // Используем функцию offset для получения вертикального смещения
        let elementStart = 4;
      
        let elementPoint = window.innerHeight - elementHeight / elementStart;
        if (elementHeight > window.innerHeight) {
          elementPoint = window.innerHeight - window.innerHeight / elementStart;
        }
      
        if((pageYOffset > elementOffset - elementPoint) && pageYOffset < (elementOffset + elementHeight)){
            element.classList.add(animationClass)
            element.classList.add('opacity1')
        } else if (elementOffset > window.innerHeight + 500){
            return
        } 
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
  }
  





export function onScrollAndLoad() {
    const animations = [
        { className: '.fade-in', animationClass: 'animate__fadeIn' },
        { className: '.fade-out', animationClass: 'animate__fadeOut' },
        { className: '.fade-left', animationClass: 'animate__fadeInLeft' },
        { className: '.fade-right', animationClass: 'animate__fadeInRight' },
        { className: '.fade-up', animationClass: 'animate__fadeInUp' },
        { className: '.fade-down', animationClass: 'animate__fadeInDown' },

        { className: '.slide-in', animationClass: 'animate__slideIn' },
        { className: '.slide-out', animationClass: 'animate__slideOut' },
        { className: '.slide-left', animationClass: 'animate__slideInLeft' },
        { className: '.slide-right', animationClass: 'animate__slideInRight' },
        { className: '.slide-up', animationClass: 'animate__slideInUp' },
        { className: '.slide-down', animationClass: 'animate__slideInDown' },

        { className: '.zoom-in', animationClass: 'animate__zoomIn' },
        { className: '.zoom-out', animationClass: 'animate__zoomOut' },
        { className: '.zoom-left', animationClass: 'animate__zoomInLeft' },
        { className: '.zoom-right', animationClass: 'animate__zoomInRight' },
        { className: '.zoom-up', animationClass: 'animate__zoomInUp' },
        { className: '.zoom-down', animationClass: 'animate__zoomInDown' },
        
        { className: '.bounce-in', animationClass: 'animate__bounceIn' },
        { className: '.bounce-out', animationClass: 'animate__bounceOut' },
        { className: '.bounce-left', animationClass: 'animate__bounceInLeft' },
        { className: '.bounce-right', animationClass: 'animate__bounceInRight' },
        { className: '.bounce-up', animationClass: 'animate__bounceInUp' },
        { className: '.bounce-down', animationClass: 'animate__bounceInDown' },
        
        { className: '.rotate-in', animationClass: 'animate__rotateIn' },
        { className: '.rotate-out', animationClass: 'animate__rotateOut' },
    ];

    animations.forEach(animation => {
        handleAnimation(animation.className, animation.animationClass);
    });
}