import React from 'react';
import './section-two.css';
function sectionTwo(){
    return(
        <>
            <section className='section2' id='collection'>
                <img src='media/group 427.svg' className='absolute absolute-img-4 z-index--1 animate__animated slide-left' width='30%'></img>
                <div className='overflow-hidden'>
                    <h2 className="section2-main-title animate__animated fade-up" >
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
                <div className="collections-item-2">
                    <div className="absolute white-box"></div>
                    <div className="overflow-hidden collections-main-img">
                        <img src="media/collections-img4.jpg" className='animate__animated zoom-left' alt="" />
                    </div>
                    <div className="overflow-hidden">
                        <div className="collections-info animate__animated zoom-right">
                            <h2>
                                best fashion since 2023
                                
                            </h2>
                            <p>
                            Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis 
                            condimentum lobortis. ad litora torquent per.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="collections-table animate__animated zoom-right">
                        <div className="table-item item-1">
                        <h2>2022</h2>
                        <p>Fifash founded</p>
                        </div>
                        <div className="line-y"></div>
                        <div className="table-item item-2">
                        <h2>8800+</h2>
                        <p>Product Sold</p>
                        </div>
                        <div className="line-y"></div>
                        <div className="table-item item-3">
                        <h2>2022</h2>
                        <p>Best Reviews</p>
                        </div>
                </div>
            </section>
        </>
    )
}

export default sectionTwo;