import { Fragment } from "react";

const iphoneList= [];
const iphone =[
    {
        name: "iPhone 14 Pro Max",
        img1: 'https://images.app.goo.gl/1yN8Ah9PPiSovECH7.jpg',
        img2:'../assets/images/iphone-14.2.jpg',
        img3:'../assets/images/iphone-14.3.jpg',
        price:"ETB 69,990 ",

    },
    {
        name: "iphone 13",
        img1:'/assets/images/iphone13.1.jpg',
        img2:'/assets/images/iphone13.2.jpg',
        img3:'/assets/images/iphone13.3.jpg',
        price:"ETB 68,990",
    },
    {
        name: "iphone 11",
        img1:'/assets/images/iphone13.1.jpg',
        img2:'/assets/images/iphone13.2.jpg',
        img3:'/assets/images/iphone13.3.jpg',
        price:"ETB 66,990",
    }
       
];

function IphoneItems ({width}) {
 width = width ? width : 2;
 iphone.forEach(({name, img1, img2, img3, price}, HomePage)=>{
    iphoneList.push(
        <div key={HomePage} className={"col-6 col-sm-6 col-md-6 col-lg-" + width + " mb-3"}>
        <a href="/iphone" className="card"
        style={{ borderStyle: "solid", textDecoration:"none",borderColor: "#bef8fd", borderRadius: 15 }} >
        <div className="card-body">
          <div className="carousel slide" data-ride="carousel" id="carousel-1">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="w-100 d-block"
                  src={img1}
                  alt="iphone product 1" />
        </div>
        <div className="carousel-item">
                <img  className="w-100 d-block"
                  src={img2}
                  alt="iphone product 2" />
              </div>
              <div className="carousel-item">
                <img className="w-100 d-block"
                  src={img3}
                  alt="iphone product 3" />
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
       {iphoneList}
     </Fragment>
 )
}

export default IphoneItems;