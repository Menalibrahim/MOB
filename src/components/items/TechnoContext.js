import React, { useState, createContext } from "react";

export const TechnoContext = createContext();

export const TechnoProvider= props =>{
    const [technos, setTechnos] = useState([
        {
            name: "Techno Sparkle",
            img1: 'https://fdn2.gsmarena.com/vv/pics/tecno/tecno-spark-7-1.jpg',
            img2:'https://fdn2.gsmarena.com/vv/pics/tecno/tecno-spark-7-1.jpg',
            img3:'https://fdn2.gsmarena.com/vv/pics/tecno/tecno-spark-7-1.jpg',
            price:"ETB 39,990 ",
        },
        {
            name: "Techno Camon 16",
            img1: 'https://m.media-amazon.com/images/I/71+Em98nolL._SL1500_.jpg',
            img2: 'https://m.media-amazon.com/images/I/71+Em98nolL._SL1500_.jpg',
            img3: 'https://m.media-amazon.com/images/I/71+Em98nolL._SL1500_.jpg',
            price:"ETB 39,990 ",
        },
        {
            name: "Techno Pova",
            img1: 'https://specs-tech.com/wp-content/uploads/2020/09/Tecno-Pova.jpg',
            img2: 'https://specs-tech.com/wp-content/uploads/2020/09/Tecno-Pova.jpg',
            img3: 'https://specs-tech.com/wp-content/uploads/2020/09/Tecno-Pova.jpg',
            price:"ETB 39,990 ",
        },
      ]);

      return(
        <TechnoContext.Provider value={[technos, setTechnos]}>
            {props.children}
        </TechnoContext.Provider>
      )
}