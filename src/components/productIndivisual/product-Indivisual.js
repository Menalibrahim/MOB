import { useContext } from "react";
import { CartHolderContext } from "../../context/cartHolder.context";

const ProductIndividual = ({ phone }) => {
  const { cartItems, addItemToCart } = useContext(CartHolderContext);
  // console.log(number);

  const description = phone.description.split(",");

  const cartClickHandler = () => {
    addItemToCart(phone);
  };

  return (
    <div className="product-individual">
      <img src={phone.image_url} alt={phone.phone_name} />
      <h5 className="product-individual-title">{phone.phone_name}</h5>
      <ul className="product-individual-list">
        <li>🔋{description[2]}</li>
        <li>📁{description[3]}</li>
        <li>⚡{description[4]}</li>
        <li>💰 {phone.price} Birr</li>
      </ul>
      <button onClick={cartClickHandler}>🛒 Add To Cart</button>
    </div>
  );
};

export default ProductIndividual;
