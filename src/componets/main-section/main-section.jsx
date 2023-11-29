import React from 'react';
import { hamburger } from '../../main';
import { hoverToText } from '../../main';
import { onScrollAndLoad } from '../../animations';
import { scrollHeader } from '../../main';
import { deleteMenuScroll } from '../../main';
import './main-section.css';
function MainSection(){
    return(
        <>
            <main className="App section1">
                <header>
                    <div className="header-bg">
                        <a className="logo animate__animated fade-left">
                            <img src="media/logo.svg" alt="CoolKids Logo"/>
                        </a>
                        <nav>
                            <div className='overflow-hidden'>
                                <div className="links animate__animated fade-right ">
                                    <ul>
                                        <li><a href="#collection">collection</a></li>
                                        <li><a href="#boys">boys</a></li>
                                        <li><a href="#girls">girls</a></li>
                                        <li><a href="#trends">trends</a></li>
                                        <li><a href="#contact">contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hamburger animate__animated fade-right" id="hamburger" onClick={hamburger}>
                                <svg viewBox="0 0 32 32">
                                    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                    <path className="line" d="M7 16 27 16"></path>
                                </svg>
                            </div>
                        </nav>
                    </div>
                </header>
                <img src="media/Group 36.svg" alt="" className="absolut-img-1 absolute animate__animated slide-left"/>
                <div className="main">
                    <div className='overflow-hidden z-index-10'>
                        <div className="main-info animate__animated fade-up">
                            <h1 id='hoverElem'>
                                find the best fashion style for you
                            </h1>
                            <p>
                                Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora.
                            </p>
                            <a href="#">
                                shop now
                            </a>
                        </div>
                    </div>
                    <img src="media/Group 36.svg" alt="" className="absolut-img-2 absolute animate__animated slide-down "/>
                    <div className="main-img animate__animated zoom-in">
                        <img src="media/main-photo.png" alt=""/>
                    </div>
                    <img src="media/Group 36.svg" alt="" className="absolut-img-3 absolute animate__animated slide-right "/>
                </div>
                <img src="media/Group 32.svg" alt="" className="main-bottom animate__animated slide-up "/>
            </main>
        </>
    )
}
// анимации
window.addEventListener('load', hoverToText);
window.addEventListener('load', onScrollAndLoad);
window.addEventListener('scroll', onScrollAndLoad);
window.addEventListener('scroll', deleteMenuScroll);
window.addEventListener('scroll', scrollHeader);
export default MainSection;