import { useContext } from "react";
import { CardContext } from "../../Context/CartContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const {myCart,total,addtoCart, setTotal} = useContext(CardContext);
    const navigate = useNavigate();
    const checkOut = ()=>{
        setTotal(0);
        addtoCart([{}]);
    }
    const backHome = ()=>{
        navigate("/fruits")
    }
    return (
        <>
            <section className="cart-container">
                <div className="cart-header">Check Out:</div>
                <div className="cart-items">
                    {myCart.slice(1).map((item)=>{
                        return(
                            <div className="cart-item">
                                <img src={item.imageUrl} className="cart-item-img"alt=""/>
                                {item.name} : {item.price}$
                            </div>
                        )
                    })}
                    <div className="card-total">
                        Total : {total}$
                    </div>
                </div>
                <button className="cart-checkout" onClick={checkOut}>Pay Now</button>
                <button className="cart-gohome" onClick={backHome}>Back to Product Page</button>
            </section>
        </>
    );
}
 
export default Cart;