import React, { useContext } from "react";
import "./cart.css";
import { CartHolderContext } from "../../context/cartHolder.context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartHolderContext);
  return (
    <div className="cart-the-hole">
      <h6>Cart Items</h6>
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <div className="item" key={cartItem.id}>
            <img src={cartItem.image_url} alt={cartItem.phone_name} />
            <div className="item-description">
              <p className="item-title">{cartItem.phone_name}</p>
              <div className="item-and-quantity">
                <p>x{cartItem.quantity}</p>
                <p>{cartItem.price} Birr</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="cart-button"
        onClick={() => {
          navigate("/checkout");
        }}
      >
        Go To Checkout
      </button>
    </div>
  );
};
export default Cart;
