import { Fragment } from "react";
import {Add,Remove, RestartAlt} from '@mui/icons-material';
import { useState} from 'react';
import { useCart } from "react-use-cart";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";


   const TechnoProduct = ({name,img1, img2, img3, img4, price, description, phone, item}) => {
    const [count, setCount] = useState(0)
      const {addItem} = useCart();
      
//     const techno = 
//         {
//           name: "techno",
//           img1: 'https://fdn2.gsmarena.com/vv/pics/tecno/tecno-spark-7-1.jpg',
//           img2: 'https://m.media-amazon.com/images/I/71+Em98nolL._SL1500_.jpg',
//           img3: 'https://specs-tech.com/wp-content/uploads/2020/09/Tecno-Pova.jpg',
//           img4: 'https://fdn2.gsmarena.com/vv/pics/tecno/tecno-spark-7-1.jpg',
//           price:"ETB 66,900",
//           description: `iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera.`,
//            phone: "0900000000"
//         }

    return(
        <Fragment>
<CartProvider>
    <section id="post_detail" className="mt-5">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="row">
                        {/*<TechnoProduct name={technoP.name} img1={technoP.img1} img2={technoP.img2} img3={technoP.img3} img4={technoP.img4} price={technoP.price} description={technoP.description} phone=
            {technoP.phone} /> */}
                        <div className="col-sm-12 col-lg-6 mb-3">
                        <div className="text-center">
                        <div className="row no-gutters">
                        <div className="col-12 col-lg-6"><a href={(img1)}><img className=""height={"127px"} width={"225"} src={(img1)} alt="buy Brand new Phones from MOB"/></a></div>
            <div className="col-12 col-lg-6"><a href={(img2)}><img className=""height={"127px"} width={"225"} src={(img2)} alt="buy Brand new Phones from MOB"/></a></div>
            <div className="col-12 col-lg-6"><a href={(img3)}><img className=""height={"127px"} width={"225"} src={(img3)} alt="buy Brand new Phones from MOB"/></a></div>
            <div className="col-12 col-lg-6"><a href={(img3)}><img className=""height={"127px"} width={"225"} src={(img4)} alt="buy Brand new Phones from MOB"/></a></div>
                       
                       </div>
                       </div>
                       </div>
                        <div className="col-sm-12 col-lg-6 mb-3 pt-5 px-5">
                            <h3 style={{ color: "#2cb1bc" }}>
                                <strong>{name}</strong>
                            </h3>
                            <hr />
                <button className="btn btn-primary border-white" 
                    onClick= {() => addItem(item)}
                    style={{ background: "#2cb1bc", color:"white",  justifyContent:"right" }}>
                      Add To Cart
                 </button>
        
                                {/* <button
                                className="btn btn-primary border rounded border-white"
                                // role="button"
                                style={{ background: "#2cb1bc", color:"white" }}
                                // href="cart.html"
                                >
                                Add to cart
                                </button> */}
                            
                            <p>
                                <strong>Description</strong>
                            </p>
                            <hr />
                            <p className="text-secondary">
                                {description}
                            </p>
                            <hr />
                            <p>
                                <strong>Location</strong>
                            </p>
                            <hr />
                            <p className="text-secondary">Addis Ababa</p>
                            <hr />
                            <p>
                                <strong>Price</strong>
                            </p>
                            <hr />
                            <p className="text-secondary">ETB&nbsp;{price}</p>
                            <hr />
                            <p>
                                <strong>Contact us</strong>
                            </p>
                            <hr />
                            <div className="d-flex">
                                <p className="text-secondary">Phone number -&nbsp;</p>
                                <p className="text-secondary">{phone}</p>
                            </div>
                            <div className="d-flex">
                                <p className="text-secondary mr-2">Telegram -&nbsp;</p>
                                <a href="/">t.me/MOB</a>
                            </div>
                            <hr />
                            <p>
                                <strong>Delivery</strong>
                            </p>
                            <hr />
                            <p className="text-secondary">
                                Bolle atlas
                            </p>
                        </div>
    {/* <div className="d-flex justify-content-end">
         <div className="btn btn-primary border rounded border-white" 
          style={{ background: "#2cb1bc", color:"white", width: "30px",height: "30px",borderRadius: "10px",border: "1px solid teal", display: "flex", alignItems: "center", justifyContent: "center", margin: "0px 5px" }}>
            <Remove onClick={() => setCount(count - 1)}/>
          </div>
          <div  style={{width: "30px",height: "30px",borderRadius: "10px",border: "1px solid teal",display: "flex", alignItems: "center", justifyContent: "center", margin: "0px 5px"}}>
            {count}
          </div>
          <div className="btn btn-primary border rounded border-white" 
          style={{ background: "#2cb1bc", color:"white", width: "30px",height: "30px",borderRadius: "10px",border: "1px solid teal", display: "flex", alignItems: "center", justifyContent: "center", margin: "0px 5px" }}>
            <Add onClick={() => setCount(count + 1)}/>
            </div>
            <div className="btn btn-primary border rounded border-white" 
          style={{ background: "#2cb1bc", color:"white", width: "30px",height: "30px",borderRadius: "10px",border: "1px solid teal", display: "flex", alignItems: "center", justifyContent: "center", margin: "0px 5px" }}>
            <RestartAlt onClick={() => setCount(0)}/>
            </div>
           
             </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div style={{height:"80px"}}>

    </div>
    <Cart />
    </CartProvider>
        </Fragment>
    )
    }

export default TechnoProduct;
