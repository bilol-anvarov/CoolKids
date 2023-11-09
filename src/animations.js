import ScrollMagic from 'scrollmagic';

function handleAnimation(className, animationClass) {
  // Создайте экземпляр ScrollMagic Controller
  var controller = new ScrollMagic.Controller();

  var sections = document.querySelectorAll(className);

  sections.forEach(function (section) {
    // Создайте экземпляр ScrollMagic Scene для каждой секции
    var scene = new ScrollMagic.Scene({
      triggerElement: section,
      triggerHook: 1, // Измените этот параметр в зависимости от того, когда должна начинаться анимация (от 0 до 1)
      reverse: true, // Анимация будет проигрываться только один раз
    })
      .setClassToggle(section, animationClass) // Добавить/удалить класс анимации при скролле
      .addTo(controller);
  });
}

// Пример использования:
// handleAnimation("section", "visible");


// function handleAnimation(className, animationClass) {
//     let elements = document.querySelectorAll(className);
//     elements.forEach(element => {
//         const rect = element.getBoundingClientRect();
//         if (rect.top <= window.innerHeight && rect.bottom >= 0) {
//             element.classList.add(animationClass);
//         } else {
//             element.classList.remove(animationClass);
//         }
//     });
// }

export function onScrollAndLoad() {
    const animations = [
        { className: '.fade-in', animationClass: 'animate__fadeIn' },
        { className: '.fade-left', animationClass: 'animate__fadeInLeft' },
        { className: '.fade-right', animationClass: 'animate__fadeInRight' },
        { className: '.fade-up', animationClass: 'animate__fadeInUp' },
        { className: '.fade-down', animationClass: 'animate__fadeInDown' },
        { className: '.slide-in', animationClass: 'animate__slideIn' },
        { className: '.slide-left', animationClass: 'animate__slideInLeft' },
        { className: '.slide-right', animationClass: 'animate__slideInRight' },
        { className: '.slide-up', animationClass: 'animate__slideInUp' },
        { className: '.slide-down', animationClass: 'animate__slideInDown' },
        { className: '.zoom-in', animationClass: 'animate__zoomIn' },
        { className: '.zoom-in-left', animationClass: 'animate__zoomInLeft' },
        { className: '.zoom-in-right', animationClass: 'animate__zoomInRight' },
        { className: '.zoom-in-up', animationClass: 'animate__zoomInUp' },
        { className: '.zoom-in-down', animationClass: 'animate__zoomInDown' },
    ];

    animations.forEach(animation => {
        handleAnimation(animation.className, animation.animationClass);
    });
}
