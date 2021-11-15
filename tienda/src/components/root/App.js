import React from "react";
import { Container } from "reactstrap";
import Header from "../header/Header";
import Dashboard from "./Dashboard";
import { Routes, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/products" exact element={<Dashboard />} />
        <Route path="/cart" exact element={<CartDetail />} />
      </Routes>
    </Container>
  );
}

export default App;
