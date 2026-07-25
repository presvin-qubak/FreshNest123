import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import ProductCard from "./components/ProductCard/ProductCard";
import Category from "./components/Category/Category";
import Shop from "./pages/Shop/Shop";
import Offer from "./pages/Offer/Offer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Checkout from "./pages/Checkout/Checkout";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Wishlist from "./pages/Wishlist/Wishlist";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import MyAccount from "./pages/MyAccount/MyAccount";
import Orders from "./pages/Orders/Orders";
import Address from "./pages/Address/Address";
import Settings from "./pages/Settings/Settings";

const App = () => {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />

      <main className="main-content">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product-card" element={<ProductCard />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/checkout" element={<Checkout />} />
           <Route path="/place-Order" element={<PlaceOrder />} />
           <Route path="/wishlist" element={<Wishlist />} />

           <Route path="/product/:id" element={<ProductDetails />} />
           <Route path="*" element={<PageNotFound />}/> 
           <Route path="/profile" element={<MyAccount />} />
           <Route path="/orders" element={<Orders />} />
           <Route path="/address" element={<Address />} />
           <Route path="/settings" element={<Settings />} />
           
         
 
  

  
  

          
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;