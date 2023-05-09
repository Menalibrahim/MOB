import React, {useContext, } from "react";
import TechnoProduct from "./TechnoP";
import { TechnoPContext } from "./TechnoPContext";

const TechnoPItem = () =>{
const [technosP, SetTechnosP] = useContext(TechnoPContext)

return(
    <div>
        {technosP.map((technoP, index) => (
            <TechnoProduct name={technoP.name} img1={technoP.img1} img2={technoP.img2} img3={technoP.img3} img4={technoP.img4} price={technoP.price} description={technoP.description} phone=
            {technoP.phone} item={technoP} key={index} />
        ))}
    </div>
)
}

export default TechnoPItem