import { useContext, useState } from "react";
import "./Fruit.css";
import { CardContext } from "../../Context/CartContext";

const FruitCard = (props) => {
    const {id, name, type, description, price, imageUrl}= props;
    const {addtoCart, setTotal} =useContext(CardContext);
    const [added, setAdded]= useState(false);
    const addToCart =()=>{
        setAdded(true);
        const newFruits={
            name: name,
            price: price,
            imageUrl: imageUrl,
        };
        addtoCart((fruit)=>[...fruit,newFruits]);
        setTotal((total)=> total += Number(price));
    };
    return (
        <>
        <section className="fruits">
            <div className="fruit-info">
                <p>{name}</p>
                <p>{type}</p>
            </div>
            <div className="fruit-img-container">
                <img className="fruit-img" src={imageUrl} alt={`Picture of ${name}`}></img>
            </div>
            <div className="fruit-des">
                {description}
            </div>
            <div className="fruit-price">
                {price}$
            </div>
            {added ? (
                <button disable className="fruit-btn">ADDED</button>
            ) :(
                <button className="fruit-btn"onClick={addToCart}>Add To Cart</button>
            )}           
        </section>
        </>
    );
}
 
export default FruitCard;