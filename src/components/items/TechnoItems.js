import React, { useContext, useState } from "react";
import Techno from "./Techno";
import { TechnoContext } from "./TechnoContext";

const TechnoItem = () =>{
  const [technos, setTechnos] = useContext(TechnoContext)

  return(
    <div>
        {technos.map(techno =>(
         <Techno name={techno.name} price={techno.price} img1={techno.img1} img2={techno.img2} img3={techno.img3}  />   
        ))}
    </div>
  )


}
export default TechnoItem;