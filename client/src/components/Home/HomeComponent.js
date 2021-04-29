import React from "react";
import "./HomeComponent.css";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";


function Home() {
  return (
    <Container>
      <Jumbotron>
        <h1>Asociación Universal de Superhéroes</h1>
      </Jumbotron>
    </Container>
  );
}

export default Home;
