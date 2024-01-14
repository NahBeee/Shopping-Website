import FruitCard from "./FruitCard";
import "./Fruit.css";

const Fruit = (props) => {
    const {allFruits}= props;
    return (
        <>
            <section className="fruit-container">
                {allFruits.map((fruit)=>{
                    return(
                        <div key={fruit.id}>
                            <FruitCard id ={fruit.id} name= {fruit.name} type= {fruit.type} description= {fruit.description} price= {fruit.price} imageUrl= {fruit.imageUrl}></FruitCard>
                        </div>
                    )
                })}
            </section>
        </>
    );
}
 
export default Fruit;