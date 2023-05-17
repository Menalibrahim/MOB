import { useContext } from "react";
import { CartHolderContext } from "../../context/cartHolder.context";
import { useNavigate } from "react-router-dom";

import "./detail.css";

const Detail = ({ product }) => {
  const navigate = useNavigate();
  const { addItemToCart, buyNow } = useContext(CartHolderContext);
  const description = product.description.split(",");

  const buyNowClickHandler = () => {
    buyNow(product);
    navigate("/checkout");
  };

  const addToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="detail-product">
      <img src={product.image_url} alt={product.phone_name} />
      <div>
        <h3 className="detail-title">{product.phone_name}</h3>
        <p>{description[0]}</p>
        <div className="detail-sectioning">
          <ul className="product-individual-list">
            {description.map((d, i) => {
              if (i <= 3 && i !== 0) {
                return <li>{d}</li>;
              }
            })}
          </ul>
          <ul className="product-individual-list">
            {description.map((d, i) => {
              if (i > 3 && i !== 0) {
                return <li>{d}</li>;
              }
            })}
          </ul>
        </div>
        <p>
          Price <strong>{product.price} Birr</strong>
        </p>
        <div className="button-sectioning">
          <button className="buy-now" onClick={buyNowClickHandler}>
            Buy Now
          </button>
          <button className="cart-p" onClick={addToCart}>
            🛒 Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
