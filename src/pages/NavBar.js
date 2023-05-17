import "../assets/bootstrap/bootstrap.min.css";
import { Fragment, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import MyFooter from "./Footer";
import { CartHolderContext } from "../context/cartHolder.context";
import Cart from "../components/cart/cart.component";

function NavBar() {
  const navigate = useNavigate();
  const { isCartOpen, setIsCartOpen, cartItemCounter } =
    useContext(CartHolderContext);
  const toggleCart = () => {
    setIsCartOpen((currentCart) => !currentCart);
  };

  const openProducts = () => {
    navigate("/products");
  };
  // console.log(isCartOpen);
  return (
    <Fragment>
      <section id="navbar" className="navv" style={{ background: "#14919b" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <nav className="navbar navbar-light navbar-expand-lg py-3">
                <div className="container-fluid">
                  <a
                    className="navbar-brand"
                    href="/"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "white",
                    }}
                  >
                    <strong>MOB</strong>
                  </a>
                  <div
                    className="collapse navbar-collapse nav-holder"
                    id="navcol-1"
                  >
                    <ul className="navbar-nav ml-auto float-right nav-holder ">
                      <li className="nav-item linker">
                        <Link onClick={toggleCart} className="nav-link">
                          <i
                            style={{ color: "white" }}
                            className="fa fa-shopping-cart mr-1"
                          />
                          <b>{cartItemCounter} &nbsp; Cart</b>
                        </Link>
                      </li>

                      <li className="nav-item linker">
                        <Link className="nav-link" to="/products">
                          <i
                            style={{ color: "white" }}
                            class="fa fa-user"
                            aria-hidden="true"
                          ></i>
                          <b>Products</b>
                        </Link>
                      </li>

                      <li className="nav-item linker">
                        <Link to="/checkout" className="nav-link">
                          <i
                            style={{ color: "white" }}
                            className="fa fa-receipt mr-1"
                          />
                          <b>Checkout</b>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className="mrgn-tp"></div>
      <Outlet />
      <MyFooter />
      {isCartOpen && <Cart />}
    </Fragment>
  );
}

export default NavBar;
