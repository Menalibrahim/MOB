

function MyFooter(){
    return(
        <section id="bootom-navbar" className="fixed-bottom d-xs-block d-sm-block d-md-block d-lg-none" style={{background: "rgb(58, 181, 74)",marginTop: "200px"}}>
            <div className="d-flex justify-content-between fixed-bottom px-3" style={{background: "#2cb1bc"}}>
            <div className="text-center mt-2"><a href="Store.html"> <i style={{color:"white"}} className="fa fa-shopping-cart mr-1" /></a>
                <p style={{fontSize: "14px"}}><strong>Store</strong></p>
            </div>
            <div className="text-center mt-2"><a href="Login"><i style={{color:"white"}}  class="fa fa-sign-in" ></i></a>
                <p style={{fontSize: "14px"}}><strong>Login</strong></p>
            </div> 
            <div className="text-center mt-2"><a href="Product.html"><i style={{color:"white"}} class="fa fa-user" ></i></a>
                <p style={{fontSize: "14px"}}><strong>Profile</strong></p>
            </div> 
            </div>
        </section>
    )
}

export default MyFooter;