import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PhoneDataContext } from "../context/phoneData.context";

const ProductDetail = () => {
  const { productId } = useParams();

  const { allPhones } = useContext(PhoneDataContext);

  const selectedProduct = allPhones.filter((phone) => phone.id === productId);

  console.log(selectedProduct);
  //check if the product is avalable

  return <div>detail{productId}</div>;
};

export default ProductDetail;
