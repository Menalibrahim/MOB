import { Fragment } from "react";

const SamsungList = [];
const Samsung = [
  {
    name: "Samsung Galaxy S22",
    img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/asa_ssfkrq.jpg',
    img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/asa_ssfkrq.jpg',
    img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/tire_uselpo.jpg',    price:"95,000"
  },
 
  {
    name: "Samsung Galaxy S21",
    img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/800px-Blade_steak_ovhtep.jpg',
    img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/tire_uselpo.jpg',
    img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/asa_ssfkrq.jpg',    price:"95,000"
  },
  
  {
    name: "Samsung Galaxy A51",
    img1: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/tire_uselpo.jpg',
    img2: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/800px-Blade_steak_ovhtep.jpg',
    img3: 'https://res.cloudinary.com/forfeta/image/upload/v1674824651/meat/asa_ssfkrq.jpg',    price:"95,000"
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


