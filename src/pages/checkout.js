import { useContext } from "react";
import { CartHolderContext } from "../context/cartHolder.context";
import Wrapper from "../assets/wrappers/contact_us";

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
                <p>{cartItem.price} Birr</p>
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
          <h3>Total : {total}</h3>
        </div>
      </div>
    </Wrapper>
  );
};

export default Checkout;
