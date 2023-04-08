import { Fragment } from "react";

const iphoneList= [];
const iphone =[
    {
        name: "iPhone 14 Pro Max",
        img1: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-126771/Apple-iPhone-14-Pro_FINAL_featured-image-packshot-review-1.jpg',
        img2:'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg',
        img3:'https://img.etimg.com/thumb/msid-91597651,width-1200,height-900,imgsize-18746,overlay-etpanache/photo.jpg',
        price:"ETB 69,990 ",

    },
    {
        name: "iphone 13",
        img1:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg',
        img2:'https://i.insider.com/6140f360f0cb130019e8c223',
        img3:'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-13-pro-graphite.png?v=26',
        price:"ETB 68,990",
    },
    {
        name: "iphone 11",
        img1:'https://www.emsgadgets.com/wp-content/uploads/2021/08/apple-11-1.jpeg',
        img2:'https://img.grouponcdn.com/stores/3i6G4YcLzoPS2sNpCTgaPQkesTU/storesoi53377765-1667x1000/v1/sc600x600.jpg',
        img3:'https://www.mobitronics.co.ke/wp-content/uploads/2021/10/IPHONE-11-64GB-300x300.jpg',
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
                  src={(img1)}
                  alt="iphone product 1" />
        </div>
        <div className="carousel-item">
                <img  className="w-100 d-block"
                  src={(img2)}
                  alt="iphone product 2" />
              </div>
              <div className="carousel-item">
                <img className="w-100 d-block"
                  src={(img3)}
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