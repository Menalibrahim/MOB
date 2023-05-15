import Samsung from "../file/samsung";
import Iphone from "../file/iphone";
import Tecno from "../file/tecno";

import { useContext, useEffect } from "react";
import { PhoneDataContext } from "../context/phoneData.context";
import EachProduct from "../components/eachProduct/eachProduct";
import { CartHolderContext } from "../context/cartHolder.context";

const Products = () => {
  const { cartItems } = useContext(CartHolderContext);
  //console.log(cartItems);

  const phoneBrands = ["Samsung", "Apple", "Tecno"];
  const {
    samsung,
    setSamsung,
    iphone,
    setIphone,
    tecno,
    setTecno,
    allPhones,
    setAllPhones,
  } = useContext(PhoneDataContext);
  //console.log(allPhones);

  useEffect(() => {
    //samsung
    setSamsung(Samsung);
    //iphone
    setIphone(Iphone);
    //tecno
    setTecno(Tecno);

    //all phones
    setAllPhones([...Samsung, ...Iphone, ...Tecno]);
  }, []);

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
