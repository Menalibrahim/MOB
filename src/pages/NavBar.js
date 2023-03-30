import "../assets/bootstrap/bootstrap.min.css"
import { Fragment } from "react";
import {Outlet} from 'react-router-dom';
//import About from "./About";
import MyFooter from "./Footer"



function NavBar() {
    return(
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
                    style={{ fontFamily: "Montserrat, sans-serif",color:"white" }}
                    >
                    <strong>MOB</strong>
                    </a>
                    <form className="form-inline">
                    <div className="d-flex">
                        <select className="form-control w-20" name="search_type">
                        <optgroup label="Choose">
                            <option value="All">
                            Products
                            </option>
                            <option value="iphone">iphone</option>
                            <option value="samsung">samsung</option>
                            <option value="Techno">techno</option>
                        </optgroup>
                        </select>
                        <input
                        className="form-control"
                        type="text"
                        name="search_query"
                        placeholder="Search"
                        required=""
                        />
                        <button
                        className="btn btn-white text-dark border-dark justify-content-center"
                        type="submit"
                        >
                        <i  style={{ color:"white"}} class="far fa-search"></i> 
                        </button>
                    </div>
                    </form>
                    <div className="collapse navbar-collapse" id="navcol-1">
                    <ul className="navbar-nav ml-auto float-right">
                       
                        <li className="nav-item">
                        <a className="nav-link active" href="store.html">
                            <i style={{color:"white"}} className="fa fa-shopping-cart mr-1" />
                            <b>Store</b>
                        </a>
                        </li>
                        {/*<i class='fas fa-user-alt' style='font-size:24px'></i>*/}
                        <li className="nav-item">
                        <a className="nav-link active" href="login">
                            <i style={{color:"white"}}  class="fa fa-sign-in" ></i>
                            <b> Login</b>
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="product.html">
                            <i style={{color:"white"}} class="fa fa-user" aria-hidden="true"></i>
                            <b> Pro</b>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
            </div>
        </div>
        </section>
        <Outlet/>
        <MyFooter/>
        </Fragment>
    )
}

export default NavBar;