import ProductIndividual from "../productIndivisual/product-Indivisual";

const EachProduct = ({ FilteredBrand }) => {
  if (FilteredBrand.length > 0) {
    const phoneBrand = FilteredBrand[0].brand_name;
    return (
      <div className="container">
        <h3 className="products-header">{phoneBrand}</h3>
        <hr />
        <div className="product-holder">
          {FilteredBrand.map((phone) => {
            return <ProductIndividual phone={phone} key={phone.id} />;
          })}
        </div>
      </div>
    );
  }
};

export default EachProduct;
