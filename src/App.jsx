import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import CategoryProducts from "./pages/CategoryProducts";
import CartPage from "./pages/CartPage";
import Checkout from "./components/Checkout/Checkout";
import { useState } from "react";
import CartWidget from "./components/Cart/CartWidget";
import LoginProvider from "./context/LoginContext";
import MyAccount from "./pages/MyAccount";
import MyList from "./pages/MyList";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const handleSetOpen = (status) => {
    setOpen(status);
  };
  return (
    <>
      <BrowserRouter>
        <LoginProvider>
          <Navigation CartWidgetStatus={open} handleOpenCart={handleSetOpen} />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route
              path="/products/:category/:subcategory"
              element={<Products />}
            ></Route>
            <Route
              path="/products/:category"
              element={<CategoryProducts />}
            ></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/my-account" element={<MyAccount />}></Route>
            <Route path="/my-list" element={<MyList />}></Route>
          </Routes>
          <CartWidget CartWidgetStatus={open} handleOpenCart={handleSetOpen} />
          <Footer />
        </LoginProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
