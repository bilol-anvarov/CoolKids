import React from "react";
import './section-four.css';
import CardsFunction from "./cards";
import BannerFunction from "./banner";
import LastFooter from "./images-flex";
function SectionFour(){
    return(
        <>
            <section className="section4">
                <CardsFunction />
                <BannerFunction />
                <img className="absolute absolut-img-7" src="./media/Vector4.svg" alt="" />
            </section>
            <section className="sectionLast4">
                <LastFooter />
            </section>
        </>
    )
}

export default SectionFour;