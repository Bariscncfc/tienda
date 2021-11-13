import React from "react";
import { Container } from "reactstrap";
import Header from "../header/Header";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Container>
      <Header />
      <Dashboard />
    </Container>
  );
}

export default App;
