import { Fragment } from "react";

const SamsungList = [];
const Samsung = [
  {
    name: "Samsung Galaxy S22",
    img1: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s22-ultra-5g-2.jpg',
    img2: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-107176/Samsung-Galaxy-S22-Exynos-featured-image-packshot-review-Recovered.jpg',
    img3: 'https://minirate.ch/wp-content/uploads/2022/01/samsung-galaxy-s22-green-1.jpg',    price:"95,000"
  },
 
  {
    name: "Samsung Galaxy S21",
    img1: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61jYjeuNUnL._AC_UF894,1000_QL80_.jpg',
    img2: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71bdE2zv5+S.jpg',
    img3: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71bdE2zv5+S.jpg',    price:"95,000"
  },
  
  {
    name: "Samsung Galaxy A51",
    img1: 'https://image-us.samsung.com/SamsungUS/home/mobile/galaxy-a51/080620/A515G_Black_M.jpg?$cm-g-primary-selcection-mobile-jpg$',
    img2: 'https://image-us.samsung.com/SamsungUS/home/mobile/galaxy-a51/080620/A51_Crush_White_M.jpg.jpg?$cm-g-primary-selcection-mobile-jpg$',
    img3: 'https://fdn2.mobgsm.com/vv/bigpic/samsung-galaxy-a51-sm-a515.jpg',    price:"95,000"
  }
];


function SamsungItems({width}) {
  width = width ? width : 2;

  Samsung.forEach(({name, img1, img2, img3, price}, HomePage)=>{
    SamsungList.push(
      <div key={HomePage} className={"col-6 col-sm-6 col-md-6 col-lg-" + width + " mb-3"}>
      <a href="/samsung" className="card"
        style={{ borderStyle: "solid", textDecoration:"none",borderColor: "#bef8fd", borderRadius: 15 }} >
        <div className="card-body">
          <div className="carousel slide" data-ride="carousel" id="carousel-1">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="w-100 d-block"
                  src={img1}
                  alt="qelal product 1" />
              </div>
              <div className="carousel-item">
                <img  className="w-100 d-block"
                  src={img2}
                  alt="qelal product 2" />
              </div>
              <div className="carousel-item">
                <img className="w-100 d-block"
                  src={img3}
                  alt="qelal product 3" />
              </div>
            </div>
            <ol className="carousel-indicators">
              <li key={1} data-target="#carousel-1" data-slide-to={0} className="active" />
              <li key={2} data-target="#carousel-1" data-slide-to={1} />
              <li key={3} data-target="#carousel-1" data-slide-to={2} />
            </ol>
          </div>
          <div  id="item-header">
            <h3 className="text-center mb-1" style={{ color: "#2cb1bc" }}>
              {name}
            </h3>
          </div>
          <hr />
          <h6 className="text-muted card-subtitle mt-3 mb-3">
            <i className="fas fa-dollar-sign" />
            &nbsp;Price - <strong>{price}</strong>&nbsp;
          </h6>
          <h6 className="text-muted card-subtitle mb-3">
            <i className="fas fa-circle-notch" style={{ fontSize: 12 }} />
            &nbsp;Status - <strong>Original</strong>
          </h6>
          <p style={{ color: "#2cb1bc" }}>By MOB</p>
        </div>
      </a>
   </div>
    )
  })

    return(
      <Fragment>
       {SamsungList}
       </Fragment>
    )
}

export default SamsungItems;


