import { useContext } from "react";
import { PhoneDataContext } from "../../context/phoneData.context";
import ProductIndividual from "../productIndivisual/product-Indivisual";

const Featured = ({ product }) => {
  // brand_name: "Samsung"
  // ​
  // description: "Samsung Galaxy S23 Ultra Android smartphone. Announced Feb 2023. Features 6.8″  display, Snapdragon 8 Gen 2 chipset, 5000 mAh battery, 1024 GB storage, 12 GB RAM, Corning Gorilla Glass Victus 2."
  // ​
  // id: "samsung_galaxy_s23_ultra-12024"
  // ​
  // image_url: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg"
  // ​
  // phone_name: "Galaxy S23 Ultra"
  // ​
  // price: 78000

  // console.log(product);

  const productBrand = product.brand_name;

  const { allPhones } = useContext(PhoneDataContext);
  const allPhonesWithTheSameBrand = allPhones.filter(
    (phone) => phone.brand_name === productBrand
  );
  const [brand] = allPhonesWithTheSameBrand.filter(
    (phone) => phone.id === product.id
  );
  let bIndex = "";
  const [brandIndex] = allPhonesWithTheSameBrand.map((phone, i) => {
    if (phone.id === product.id) {
      bIndex = i;
    }
  });

  //   console.log(bIndex);
  //   console.log(allPhonesWithTheSameBrand);

  const randomArrayFeatures = [];
  //random array for adding

  while (randomArrayFeatures.length < 5) {
    const RandomNumber = Math.trunc(
      Math.random() * allPhonesWithTheSameBrand.length
    );
    if (
      RandomNumber !== bIndex &&
      !randomArrayFeatures.includes(RandomNumber)
    ) {
      randomArrayFeatures.push(RandomNumber);
    }
  }

  const featuredArray = allPhonesWithTheSameBrand.filter((phone, i) =>
    randomArrayFeatures.includes(i)
  );

  //   console.log(randomArrayFeatures);

  return (
    <div className="feature">
      <h3>Similar Products</h3>
      <div className="product-holder">
        {featuredArray.map((phone) => {
          return <ProductIndividual phone={phone} key={phone.id} />;
        })}
      </div>
    </div>
  );
};

export default Featured;
