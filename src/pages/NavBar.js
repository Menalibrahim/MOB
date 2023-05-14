import "../assets/bootstrap/bootstrap.min.css";
import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import MyFooter from "./Footer";

function NavBar() {
  return (
    <Fragment>
      <section id="navbar" style={{ background: "#14919b" }}>
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
                        <Link className="nav-link">
                          <i
                            style={{ color: "white" }}
                            className="fa fa-shopping-cart mr-1"
                          />
                          <b>Cart</b>
                        </Link>
                      </li>

                      <li className="nav-item linker">
                        <Link className="nav-link" to="products">
                          <i
                            style={{ color: "white" }}
                            class="fa fa-user"
                            aria-hidden="true"
                          ></i>
                          <b>Products</b>
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
      <Outlet />
      <MyFooter />
    </Fragment>
  );
}

export default NavBar;
