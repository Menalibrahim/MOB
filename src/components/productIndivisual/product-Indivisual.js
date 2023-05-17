import { useContext } from "react";
import { CartHolderContext } from "../../context/cartHolder.context";
import { useNavigate } from "react-router-dom";

const ProductIndividual = ({ phone }) => {
  const navigate = useNavigate();
  const { addItemToCart } = useContext(CartHolderContext);
  // console.log(number);

  const description = phone.description.split(",");

  const cartClickHandler = () => {
    addItemToCart(phone);
  };

  const goToProductDetailPage = () => {
    navigate(`${phone.id}`);
  };

  return (
    <div className="product-individual containes">
      <div onClick={goToProductDetailPage}>
        <img src={phone.image_url} alt={phone.phone_name} />
        <h5 className="product-individual-title">{phone.phone_name}</h5>
        <ul className="product-individual-list">
          <li>🔋{description[2]}</li>
          <li>📁{description[3]}</li>
          <li>⚡{description[4]}</li>
          <li>💰 {phone.price} Birr</li>
        </ul>
      </div>
      <button onClick={cartClickHandler}>🛒 Add To Cart</button>
    </div>
  );
};

export default ProductIndividual;
