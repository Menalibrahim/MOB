import { useContext } from "react";
import "./cart.css";
import { CartHolderContext } from "../../context/cartHolder.context";

const Cart = () => {
  const { cartItems } = useContext(CartHolderContext);
  return (
    <div className="cart-the-hole">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <div className="item">{/* <img /> */}</div>
        ))}
      </div>
      <button className="cart-button">Checkout</button>
    </div>
  );
};
export default Cart;
