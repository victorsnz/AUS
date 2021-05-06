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
            <Link to={"/superheroes"} className={"bar-text"}>
              Heroes
            </Link>
            <Link to={"/superpoderes"} className={"bar-text"}>
              Poderes
            </Link>
            <Link to={"/misiones"} className={"bar-text"}>
              Misiones
            </Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavigationBar;
