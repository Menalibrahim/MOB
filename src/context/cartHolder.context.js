import { createContext, useState } from "react";

export const CartHolderContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {},
});
export const CartHolderProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  const value = {
    cartItems,
    addItemToCart,
    isCartOpen,
    setIsCartOpen,
  };

  return (
    <CartHolderContext.Provider value={value}>
      {children}
    </CartHolderContext.Provider>
  );
};
