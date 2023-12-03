import React from "react";
import cardContent from "../../content/cards/cards-content";

const Card = ({name , img , oldPrice , newPrice}) => (
    <div className="overflow-hidden">
        <div className="sectionFourCard animate__animated slide-right">
            <img src={img} alt="" className="fourImg"/>
            <div className="card-info">
                <img src="./media/stars.svg" alt="image" />
                <h4 className="cards-name">{name}</h4>
                <p>
                    <span className='gray'>{oldPrice}</span><span className='black'>{newPrice}</span>
                </p>
            </div>
        </div>
    </div>
);
const CardList = ({data}) =>(
    <div className="sectionFourCards">
        {data.map(item =>(
            <Card key={item.id} name={item.name} img={item.img} oldPrice={item.oldPrice} newPrice={item.newPrice} />
        ))}
    </div>
)
const CardsFunction = () => {
    return(
        <div>
            <img src="./media/Vector3.svg" className="absolute absolut-img-4"/>
            <h2 className="sectionH2Main">our product</h2>
            <CardList data={(cardContent)} />        
        </div>
    )
}
export default CardsFunction;