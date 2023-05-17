import { useContext, useEffect } from "react";
import { PhoneDataContext } from "../context/phoneData.context";
import EachProduct from "../components/eachProduct/eachProduct";

const Products = () => {
  // const { cartItems } = useContext(CartHolderContext);
  //console.log(cartItems);

  const phoneBrands = ["Samsung", "Apple", "Tecno"];
  const { allPhones } = useContext(PhoneDataContext);
  //console.log(allPhones);

  return (
    <div className="products-container">
      {phoneBrands.map((phoneBrand) => {
        const FilteredBrand = allPhones.filter(
          (phone) => phone.brand_name === phoneBrand
        );
        return <EachProduct FilteredBrand={FilteredBrand} key={phoneBrand} />;
      })}
    </div>
  );
};
export default Products;
