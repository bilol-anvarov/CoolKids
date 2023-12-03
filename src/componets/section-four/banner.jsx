import React from "react";
import BannerContent from "../../content/banner";
const BannerFunction = () =>{
    let bannerHeader = BannerContent.header;
    let targetDate = new Date(BannerContent.date);

    const difference = targetDate.getTime() - new Date().getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    
    return(
        <>
        <div className="banner">
            <div className="banner-info">
                <h2>{bannerHeader}</h2>
                <p className="banner-p">{BannerContent.paragraf}</p>
                <div className="times">
                    <div className="time-block day">
                        <span className="time">{days}</span>
                        <span className="time-p">Day</span>
                    </div>
                    <div className="time-block hours">
                        <span className="time">{hours}</span>
                        <span className="time-p">Hour</span>
                    </div>
                    <div className="time-block minuts">
                        <span className="time">{minutes}</span>
                        <span className="time-p">Minute</span>
                    </div>
                </div>
                <a href="#" className="banner-btn">see more</a>
            </div> 
            <div className="banner-img">
                <div className="absolute banner-cube"></div>
                <img src="./media/banner.jpg" className="banner-img-main" alt="" />
                <img src="./media/Group 36.svg" className="absolut-img-6 absolute" alt="" />
            </div>
        </div>
        </>
    )
}
export default BannerFunction;