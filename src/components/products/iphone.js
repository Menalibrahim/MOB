import { Fragment } from "react";

function Iphone ({imgs}) {
  return (
    <div className="col-sm-12 col-lg-6 mb-3">
        <div className="text-center">
        <div className="row no-gutters">
            <div className="col-12 col-lg-6"><a href={imgs[0]}><img className=""height={"127px"} width={"225"} src={imgs[0]} alt="buy Brand new Phones from MOB"/></a></div>
            <div className="col-12 col-lg-6"><a href={imgs[1]}><img className=""height={"127px"} width={"225"} src={imgs[1]} alt="buy Brand new Phones from MOB"/></a></div>
            <div className="col-12 col-lg-6"><a href={imgs[2]}><img className=""height={"127px"} width={"225"} src={imgs[2]} alt="buy Brand new Phones from MOB"/></a></div>
            <div className="col-12 col-lg-6"><a href={imgs[0]}><img className=""height={"127px"} width={"225"} src={imgs[3]} alt="buy Brand new Phones from MOB"/></a></div>
        </div>
        </div>
      <div className="carousel slide d-xs-block d-sm-block d-lg-none d-xl-none" data-ride="carousel" id="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active"><img className="w-100 d-block" src={imgs[1]} alt="buy Brand new Phones from MOB" /></div>
            <div className="carousel-item"><img className="w-100 d-block" src={imgs[2]} alt="buy Brand new Phones from MOB"/></div>
                                        <div className="carousel-item"><img className="w-100 d-block" src={imgs[0]} alt="buy Brand new Phones from MOB" /></div>
                                    </div>
                                    <ol className="carousel-indicators">
                                        <li data-target="#carousel" data-slide-to="0" className="active"></li>
                                        <li data-target="#carousel" data-slide-to="1"></li>
                                        <li data-target="#carousel" data-slide-to="2"></li>
                                    </ol>
                                </div>
                            </div>
                        
    )
    
}

function IphoneProduct() {

    const iphone = 
        {
          name: "iphone",
          img1: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-126771/Apple-iPhone-14-Pro_FINAL_featured-image-packshot-review-1.jpg',
          img2: 'https://www.emsgadgets.com/wp-content/uploads/2021/08/apple-11-1.jpeg',
          img3: 'https://www.emsgadgets.com/wp-content/uploads/2021/08/apple-11-1.jpeg',
          img4: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-126771/Apple-iPhone-14-Pro_FINAL_featured-image-packshot-review-1.jpg',
          price:"ETB 66,900",
          description: `iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera.`,
           phone: "0900000000"
        }
    
    return(
        <Fragment>

    <section id="post_detail" className="mt-5">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="row">
                        <Iphone imgs={[iphone.img1, iphone.img2, iphone.img3, iphone.img4]} />

                        <div className="col-sm-12 col-lg-6 mb-3 pt-5 px-5">
                            <h3 style={{ color: "#2cb1bc" }}>
                                <strong>{iphone.name}</strong>
                            </h3>
                            <hr />
                            <div className="d-flex justify-content-end">
                                <button
                                className="btn btn-primary border rounded border-white"
                                // role="button"
                                style={{ background: "#2cb1bc", color:"white" }}
                                // href="cart.html"
                                >
                                Add to cart
                                </button>
                            </div>
                            <p>
                                <strong>Description</strong>
                            </p>
                            <hr />
                            <p className="text-secondary">
                                {iphone.description}
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
                            <p className="text-secondary">ETB&nbsp;{iphone.price}</p>
                            <hr />
                            <p>
                                <strong>Contact us</strong>
                            </p>
                            <hr />
                            <div className="d-flex">
                                <p className="text-secondary">Phone number -&nbsp;</p>
                                <p className="text-secondary">{iphone.phone}</p>
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

                    </div>
                </div>
            </div>
        </div>
    </section>
    <div style={{height:"80px"}}>

    </div>
        </Fragment>
    )
}

export default IphoneProduct;

