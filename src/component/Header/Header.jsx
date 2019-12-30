import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Samaj</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>
            <Nav.Link href="/trust">trust</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
