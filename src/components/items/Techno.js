// import {Add,Remove, RestartAlt} from '@mui/icons-material';
// import { useState } from 'react';

const Techno = ({name, price, img1, img2, img3,width}) =>{
    // width = width ? width : 2;
    // const [count, setCount] = useState(0)
    return(
      
        <div className={"col-6 col-sm-6 col-md-3 col-lg- mb-3 "}  >
        <a href="/techno" className="card" style={{ borderStyle: "solid", textDecoration:"none",borderColor: "#bef8fd", borderRadius: 15 }} >
        
         <div className="card-body" > 
         <div className="carousel slide" data-ride="carousel" id="carousel-1">
           <div>
            <div className="carousel-inner"> 
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
        </div>
        </div> 
        </a>
        
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
             
          <button className="btn btn-primary border-white"
               style={{ background: "#2cb1bc", color:"white" }}>
                 ADD
             </button>
             
          </div> */}
          
          </div>
        
    )
}

export default Techno