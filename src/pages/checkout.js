import { useContext } from "react";
import { CartHolderContext } from "../context/cartHolder.context";
import Wrapper from "../assets/wrappers/contact_us";
import "../components/cart/checkout.query.css";

const Checkout = () => {
  const { cartItems, subFromCart, addItemToCart, deleteFromCart, total } =
    useContext(CartHolderContext);

  const subtractItem = (item) => {
    subFromCart(item);
  };

  const addToTheCart = (item) => {
    addItemToCart(item);
  };

  const deleteFromTheCart = (item) => {
    deleteFromCart(item);
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="checkout-the-hole">
          <h1 class="heading">
            Checkout Item
            <hr />
          </h1>
          <div className="checkout-items">
            {cartItems.length < 1 ? (
              <h3 className="noMessage">No Item Selected</h3>
            ) : (
              ""
            )}
            {cartItems.map((cartItem) => (
              <div className="checkout">
                <div className="checkout-headers">
                  <img src={cartItem.image_url} alt={cartItem.phone_name} />
                  <p className="item-title">{cartItem.phone_name}</p>
                </div>
                <div className="checkout-item-control">
                  <button
                    onClick={() => {
                      subtractItem(cartItem);
                    }}
                  >
                    -
                  </button>
                  <p>{cartItem.quantity}</p>
                  <button
                    onClick={() => {
                      addToTheCart(cartItem);
                    }}
                  >
                    +
                  </button>
                </div>
                <p className="checkout-price">{cartItem.price} Birr</p>
                <button
                  className="delete-checkout"
                  onClick={() => {
                    deleteFromTheCart(cartItem);
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <hr />
          <h3 className="checkout-total">Total : {total} Birr</h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default Checkout;
