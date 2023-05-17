import { createContext, useEffect, useState } from "react";

export const CartHolderContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
  isCartOpen: false,
  setIsCartOpen: () => {},
  subFromCart: () => {},
  deleteFromCart: () => {},
  cartItemCounter: 0,
  setCartItemCounter: () => {},
  total: 0,
  buyNow: () => {},
});
export const CartHolderProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItemCounter, setCartItemCounter] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cartItems.length > 0) {
      const newQuantityArray = cartItems.map((cartItem) => cartItem.quantity);
      const newCount = newQuantityArray.reduce((acc, q) => acc + q);
      setCartItemCounter(newCount);
      //for total
      const newTotalsArray = cartItems.map(
        (cartItem) => cartItem.quantity * cartItem.price
      );
      const totalPrice = newTotalsArray.reduce((acc, p) => acc + p);

      setTotal(totalPrice);
    } else {
      setCartItemCounter(0);
      setTotal(0);
    }
  }, [cartItems]);

  const subFromCart = (itemToBeSubtracted) => {
    //if the item is less than one it has to be removed

    if (itemToBeSubtracted.quantity === 1) {
      const theNewArray = cartItems.filter(
        (cartItem) => cartItem.id !== itemToBeSubtracted.id
      );
      setCartItems(theNewArray);
    }
    //it has to reduce the quantity by 1
    else {
      const theNewArray = cartItems.map((cartItem) =>
        cartItem.id === itemToBeSubtracted.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : { ...cartItem }
      );
      setCartItems(theNewArray);
    }
  };

  const deleteFromCart = (itemToBeDeleted) => {
    const theNewArray = cartItems.filter(
      (cartItem) => cartItem.id !== itemToBeDeleted.id
    );
    setCartItems(theNewArray);
  };

  const addItemToCart = (itemToBeAdded) => {
    // if the item is already in the cart
    // add quantity

    // console.log("in context");

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

  const buyNow = (itemToBeBought) => {
    setCartItems([{ ...itemToBeBought, quantity: 1 }]);
  };

  const value = {
    cartItems,
    addItemToCart,
    isCartOpen,
    setIsCartOpen,
    subFromCart,
    deleteFromCart,
    cartItemCounter,
    total,
    setCartItems,
    buyNow,
  };

  return (
    <CartHolderContext.Provider value={value}>
      {children}
    </CartHolderContext.Provider>
  );
};
