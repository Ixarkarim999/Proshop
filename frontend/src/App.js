import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Header className="py-3" />
        <Container>
          <Routes>
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/Profile" element={<ProfileScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
