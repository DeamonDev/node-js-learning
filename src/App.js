import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import { Fragment, useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { ReactDOM } from "react-dom";
import CartProvider from "./store/CartProvider";
import PopupProvider from "./store/PopupProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <PopupProvider>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </PopupProvider>
  );
}

export default App;
