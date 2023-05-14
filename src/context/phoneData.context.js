import { createContext, useState } from "react";

export const PhoneDataContext = createContext({
  samsung: [],
  setSamsung: () => {},
  iphone: [],
  setIphone: () => {},
  tecno: [],
  setTecno: () => {},
  allPhones: [],
  setAllPhones: () => {},
});
export const PhoneDataProvider = ({ children }) => {
  const [samsung, setSamsung] = useState([]);
  const [iphone, setIphone] = useState([]);
  const [tecno, setTecno] = useState([]);
  const [allPhones, setAllPhones] = useState([]);

  const value = {
    allPhones,
    setAllPhones,
    samsung,
    setSamsung,
    iphone,
    setIphone,
    tecno,
    setTecno,
  };

  return (
    <PhoneDataContext.Provider value={value}>
      {children}
    </PhoneDataContext.Provider>
  );
};
