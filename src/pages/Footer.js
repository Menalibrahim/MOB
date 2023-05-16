import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartHolderContext } from "../context/cartHolder.context";

function MyFooter() {
  const { setIsCartOpen, cartItemCounter } = useContext(CartHolderContext);
  const toggleCart = () => {
    setIsCartOpen((currentCart) => !currentCart);
  };
  return (
    <section
      id="bootom-navbar"
      className="fixed-bottom d-xs-block d-sm-block d-md-block d-lg-none"
      style={{ background: "rgb(58, 181, 74)", marginTop: "200px" }}
    >
      <div
        className="d-flex justify-content-between fixed-bottom px-3"
        style={{ background: "#2cb1bc" }}
      >
        <Link className="footer-link" to="/">
          <div className="text-center mt-2">
            <i style={{ color: "white" }} className="fa fa-home mr-1" />
            <p style={{ fontSize: "14px" }}>
              <strong>Home</strong>
            </p>
          </div>
        </Link>
        <Link className="footer-link" to="products">
          <div className="text-center mt-2">
            <i style={{ color: "white" }} class="fa fa-list"></i>
            <p style={{ fontSize: "14px" }}>
              <strong>Product</strong>
            </p>
          </div>
        </Link>
        <Link className="footer-link" onClick={toggleCart}>
          <div className="text-center mt-2">
            <i style={{ color: "white" }} class="fa fa-shopping-cart"></i>
            <p style={{ fontSize: "14px" }}>
              <strong>{cartItemCounter} &nbsp; Carts</strong>
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default MyFooter;
