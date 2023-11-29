import React, { useEffect, useRef } from 'react';
import jQuery from 'jquery';
import $ from 'jquery';
import 'slick-carousel/slick/slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './section-three.css'
function sectionThree(){
    return(
        <>
            <section className="section3">
                <div className="section-three">
                    <div className="section3-info animate__animated zoom-in">
                        <h2>best seller product</h2>
                        <p>
                            Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra per. 
                        </p>
                        <a href="#">see more</a>
                    </div>
                    <div className="section3-slider">
                        <div className="slider ">
                            <SliderCarusel/>
                        </div>
                    </div>
                </div>
            </section>  
        </>
    )
}

function SliderCarusel(){
    return(
        <>
            <div className="carousel">
                {/* First */}
                <div>
                    <div className="slider-card animate__animated slide-up">
                        <img className='sliderImg' src="./media/slider1.jpg" alt="" />
                        <div className="price">
                            <div className="stars">
                                <img src="./media/stars.svg" alt="" />
                            </div>
                            <h4>Pastel coure MR</h4>
                            <p>
                                <span className='gray'>$360</span><span className='black'>$220</span>
                            </p>
                        </div>
                    </div>
                </div>
                {/* Second */}
                <div>
                    <div className="slider-card animate__animated slide-up">
                        <img className='sliderImg' src="./media/slider2.webp" alt="" />
                        <div className="price">
                            <div className="stars">
                                <img src="./media/stars.svg" alt="" />
                            </div>
                            <h4>Pastel coure MR</h4>
                            <p>
                                <span className='gray'>$360</span><span className='black'>$220</span>
                            </p>
                        </div>
                    </div>
                </div>
                {/* Third */}
                <div>
                    <div className="slider-card animate__animated slide-up">
                        <img className='sliderImg' src="./media/slider3.jpg" alt="" />
                        <div className="price">
                            <div className="stars">
                                <img src="./media/stars.svg" alt="" />
                            </div>
                            <h4>Pastel coure MR</h4>
                            <p>
                                <span className='gray'>$360</span><span className='black'>$220</span>
                            </p>
                        </div>
                    </div>
                </div>
                {/* Fourth */}
                <div>
                    <div className="slider-card animate__animated slide-up">
                        <img className='sliderImg' src="./media/slider4.jpg" alt="" />
                        <div className="price">
                            <div className="stars">
                                <img src="./media/stars.svg" alt="" />
                            </div>
                            <h4>Pastel coure MR</h4>
                            <p>
                                <span className='gray'>$360</span><span className='black'>$220</span>
                            </p>
                        </div>
                    </div>
                </div>
                {/* Fifth */}
                <div>
                    <div className="slider-card animate__animated slide-up">
                        <img className='sliderImg' src="./media/slider5.jpg" alt="" />
                        <div className="price">
                            <div className="stars">
                                <img src="./media/stars.svg" alt="" />
                            </div>
                            <h4>Pastel coure MR</h4>
                            <p>
                                <span className='gray'>$360</span><span className='black'>$220</span>
                            </p>
                        </div>
                    </div>
                </div>
                {/* ---- */}
            </div>
        </>
    )
}
$(document).ready(function(){
    $('.carousel').slick({
      slidesToShow: 3, // Количество отображаемых слайдов
      slidesToScroll: 1, // Количество прокручиваемых слайдов за раз
      autoplay: true, // Автоматическое прокручивание
      autoplaySpeed: 3000, // Скорость автоматической прокрутки в миллисекундах
      dots: true, // Показывать точки (индикаторы) слайдов
      arrows: false, // Убираем кнопки (стрелки)
      speed: 700, // Установите здесь нужную вам скорость в миллисекундах
      responsive: [
        {
          breakpoint: 768, // Адаптивность для экранов шириной 768 пикселей и менее
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480, // Адаптивность для экранов шириной 480 пикселей и менее
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
});
  
export default sectionThree;