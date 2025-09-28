import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Auth/Login";
import LoginPhone from "./pages/Auth/LoginPhone";
import Signup from "./pages/Auth/Signup";
import SignupPhone from "./pages/Auth/SignupPhone";
import VerifyOtp from "./pages/Auth/VerifyOtp";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/Auth/NewPassword";
import PasswordChanged from "./pages/Auth/PasswordChanged";
import VerifyEmail from "./pages/Auth/VerifyEmail";
import AcceptTermsAndConditions from "./pages/Auth/AcceptTermsAndConditions";
import PickPreference from "./pages/Auth/PickPreference";
import ProductList from "./pages/ProductList";
import Wishlist from "./pages/Wishlist";
import Search from "./pages/Search";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Tryon from "./pages/Tryon";
import Order from "./pages/Order";
import TrackOrder from "./pages/TrackOrder";
import ReturnExchangeOrder from "./pages/ReturnExchangeOrder";
import ReturnOrder from "./pages/ReturnOrder";
import ProductReview from "./pages/ProductReview";
import Help from "./pages/Help";
import Support from "./pages/Support";
import Feedback from "./pages/Feedback";
import Profile from "./pages/Profile";
import Address from "./pages/Address";


const App = () => {

  return (
    <Router>
      <Header  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-phone" element={<LoginPhone />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup-phone" element={<SignupPhone />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/password-changed" element={<PasswordChanged />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/accept-tnc" element={<AcceptTermsAndConditions />} />
        <Route path="/pick-preference" element={<PickPreference />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/search" element={<Search />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/try-on" element={<Tryon />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/return-exchange-order" element={<ReturnExchangeOrder />} />
        <Route path="/return-order" element={<ReturnOrder />} />
        <Route path="/review" element={<ProductReview />} />
        <Route path="/help" element={<Help />} />
        <Route path="/support" element={<Support />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/address" element={<Address />} />

        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;