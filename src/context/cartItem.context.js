import { useState, createContext } from "react";

export const CartItemContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
});

export const CartItemProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [number, setNumber] = useState(0);
  //   console.log("context is live");

  const addItemToCart = (itemToBeAdded) => {
    // if the item is already in the cart
    // add quantity

    console.log("in context");

    const allCartItems = cartItems.map((cartItem) => cartItem.id);
    if (allCartItems.includes(itemToBeAdded.id)) {
      const newCartItems = cartItems.map((cartItem) =>
        cartItem.id === itemToBeAdded.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : { ...cartItem }
      );
      setCartItems([...newCartItems]);
    }
    //if not add to the cart with quantity one
    else {
      setCartItems((currentCartItem) => [
        ...currentCartItem,
        { ...itemToBeAdded, quantity: 1 },
      ]);
    }
  };

  const value = { cartItems, addItemToCart, number, setNumber };

  return (
    <CartItemContext.Provider value={value}>
      {children}
    </CartItemContext.Provider>
  );
};
