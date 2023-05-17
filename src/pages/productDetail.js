import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PhoneDataContext } from "../context/phoneData.context";
import Error from "./error";
import Detail from "../components/detail/detail";
import Featured from "../components/featured/featured";

const ProductDetail = () => {
  const { productId } = useParams();

  const { allPhones } = useContext(PhoneDataContext);

  const selectedProduct = allPhones.filter((phone) => phone.id === productId);

  if (selectedProduct.length === 0) {
    return <Error />;
  }

  return (
    <div className="container">
      <Detail product={selectedProduct[0]} />
      <Featured product={selectedProduct[0]} />
    </div>
  );
  //check if the product is avalable
};

export default ProductDetail;
