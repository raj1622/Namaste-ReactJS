import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = ()=>{
    const dispatch= useDispatch();
    const cartItems=useSelector((store)=> store.cart.items);
    console.log(cartItems);
    const clearCartItems= ()=>{
        dispatch(clearCart());
    }
    return (
        <div className="cart-body">
            <h3> Cart</h3>
            <button className="cart-btn" onClick={clearCartItems}>Clear Cart</button>
            <div classNam="cart-items">
                {cartItems.map((item, index) => <li key={index}>{item}</li>)}
            </div>
        </div>
    )
}
export default Cart;