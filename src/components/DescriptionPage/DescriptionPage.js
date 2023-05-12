import Wrapper from "../../assets/wrappers/DescriptionPage";

function DescriptionPage() {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1 class="heading">
              Amazing Phone.
              <br />
              <span>Amazing Deals.</span>
            </h1>
            <p className="margin-tt">
              Experience the ultimate mobile upgrade with our online store.
              Choose from a wide range of brands and models, all backed by our
              100% satisfaction guarantee. Enjoy lightning-fast delivery, 1-year
              warranty, and exceptional customer service. Elevate your phone
              game today and shop with us!
            </p>
            <button className="margin-tt">Show Products</button>
          </div>

          <div class="col-lg-6">
            <img
              style={{ height: "300px", width: "300px" }}
              className="img"
              src={require("../../assets/images/mob.jpg")}
              alt="mobile phone"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default DescriptionPage;
