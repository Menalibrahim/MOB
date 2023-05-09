import React, { useState } from "react";
import { createContext } from "react";

export const TechnoPContext = createContext();

export const TechnoPProvider = props =>{
    const [technosP, setTechnosP] = useState([
        {
          name: "techno",
          img1: 'https://fdn2.gsmarena.com/vv/pics/tecno/tecno-spark-7-1.jpg',
          img2: 'https://m.media-amazon.com/images/I/71+Em98nolL._SL1500_.jpg',
          img3: 'https://specs-tech.com/wp-content/uploads/2020/09/Tecno-Pova.jpg',
          img4: 'https://fdn2.gsmarena.com/vv/pics/tecno/tecno-spark-7-1.jpg',
          price:"ETB 66,900",
          description: `iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera.`,
           phone: "0900000000"
        },
    ]);

    return(
        <TechnoPContext.Provider value={[technosP, setTechnosP]}>
            {props.children}
        </TechnoPContext.Provider>
    )
}