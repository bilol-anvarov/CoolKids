import React from 'react';
import { onScrollAndLoad } from '../../animations';

function sectionTwo(){
    return(
        <>
            <section className='section2'>
                <img src='media/group 427.svg' className='absolute absolute-img-4 z-index--1 animate__animated slide-left' width='20%'></img>
                <div className='overflow-hidden'>
                    <h2 className="animate__animated fade-up" >
                        new collection
                    </h2>
                </div>
                <div className='overflow-hidden'>
                    <p className='animate__animated fade-up p-item-1'>
                        Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.
                    </p>
                </div>
                <div className='collections'>
                    <div className='collections-cards'>
                        <div className='overflow-hidden'>
                            <div className='animate__animated slide-right collections-card card-item-1 z-index-10'>
                            <form href='#' className='link-item-1'>
                                <button href='' className="c-button c-button--gooey">
                                    sweater
                                    <div className="c-button__blobs">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </button>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{display: 'block', height: 0, width: 0,}}>
                                    <defs>
                                        <filter id="goo">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                                            <feBlend in="SourceGraphic" in2="goo"></feBlend>
                                        </filter>
                                    </defs>
                                </svg>
                            </form>
                            </div>
                        </div>
                        <div className='overflow-hidden'>
                            <div className='animate__animated slide-right collections-card card-item-2 z-index-10'>
                            <form href='#' className='link-item-1'>
                                <button href='' className="c-button c-button--gooey">
                                    sweater
                                    <div className="c-button__blobs">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </button>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{display: 'block', height: 0, width: 0,}}>
                                    <defs>
                                        <filter id="goo">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                                            <feBlend in="SourceGraphic" in2="goo"></feBlend>
                                        </filter>
                                    </defs>
                                </svg>
                            </form>
                            </div>
                        </div>
                        <div className='overflow-hidden'>
                            <div className='animate__animated slide-right collections-card card-item-3 z-index-10'>
                            <form href='#' className='link-item-1'>
                                <button href='' className="c-button c-button--gooey">
                                    sweater
                                    <div className="c-button__blobs">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </button>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{display: 'block', height: 0, width: 0,}}>
                                    <defs>
                                        <filter id="goo">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                                            <feBlend in="SourceGraphic" in2="goo"></feBlend>
                                        </filter>
                                    </defs>
                                </svg>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute-img-background item-1 absolute z-index--1 animate__animated fade-up">
                    <img src="media/Group 36.svg" alt="" className='absolut-img-5' />
                </div>
                <div className="absolute-img-background item-2 absolute z-index--1 animate__animated fade-up">
                    <img src="media/Group 36.svg" alt="" className='absolut-img-5' />
                </div>
            </section>
        </>
    )
}
window.addEventListener('load', onScrollAndLoad);
window.addEventListener('scroll', onScrollAndLoad);

export default sectionTwo;