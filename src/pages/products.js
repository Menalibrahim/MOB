import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { PhoneDataContext } from "../context/phoneData.context";

const Products = () => {
  const { allPhoneData, setAllPhoneData } = useContext(PhoneDataContext);

  const [brands, setBrands] = useState([]);
  console.log(brands);
  const brandsFeatured = ["Samsung", "Apple", "Tecno"];
  const brandsFeaturedID = [9, 48, 120];

  // brandsFeaturedID[i]
  const getBrands = async () => {
    const options = {
      method: "GET",
      //url: "https://mobile-phones2.p.rapidapi.com/brands",
      url: `https://mobile-phones2.p.rapidapi.com/${9}/phones`,
      headers: {
        "X-RapidAPI-Key": "c8ed8f9df2mshc7864cbb43e84f3p1de984jsnbb3ba336277b",
        "X-RapidAPI-Host": "mobile-phones2.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setBrands(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBrands();
  }, []);

  return <div>products</div>;
};
export default Products;
