import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
          marginBottom: 50,
        }}
      >
        <h1>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            Tienda
          </Link>
        </h1>
        <Navbar light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Yemekler</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Yardım & Destek</NavLink>
              </NavItem>
              <CartSummary />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
