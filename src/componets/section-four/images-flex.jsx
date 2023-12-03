import React from "react";
import flexImages from "../../content/section-four/images";

const FlexImg = ({img}) => (
    <div className="overflow-hidden">
        <div className="flex-img-container animate__animated slide-left">
            <img src={img} alt="images" />
        </div>
    </div>
);

const ImgList = ({data}) => (
    <div className="sectionLastFourImg">
        {data.map(item =>(
            <FlexImg img={item.src} />
        ))}
    </div>
);

const LastFooter = () =>{
    return(
        <>
            <div>
                <ImgList data={(flexImages)} />
            </div>
        </>
    )
}
export default LastFooter;