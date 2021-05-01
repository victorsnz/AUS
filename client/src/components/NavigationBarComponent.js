import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function NavigationBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>
          <Link to={"/"} className={"bar-text"}>
            A.U.S.
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to={"/superheroes"} className={"bar-text"}>
              Heroes
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"/superpoderes"} className={"bar-text"}>
              Poderes
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"/misiones"} className={"bar-text"}>
              Misiones
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavigationBar;
