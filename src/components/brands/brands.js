import "./brands.css";

const Brands = () => {
  let iphone = require("../../assets/images/iphone.png");
  let samsung = require("../../assets/images/samsung.png");
  let techno = require("../../assets/images/Tecno.png");

  return (
    <div className="container mar-top">
      <div className="col-sm-12">
        <h2 className="text-center">
          <strong>Top Brands</strong>
          <hr className="w-50" />
        </h2>
        <div className="brand-images">
          <img src={iphone} alt="iphone logo" />
          <img src={samsung} alt="samsung logo" />
          <img src={techno} alt="techno logo" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
