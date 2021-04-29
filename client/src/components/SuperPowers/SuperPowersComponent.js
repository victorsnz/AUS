import React from "react";
import "./SuperPowersComponent.css";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

function SuperPowers() {
  return (
    <Container>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>COD</th>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0001</td>
            <td>Fuerza</td>
            <td>Fuerza más alla de la humana</td>
          </tr>
          <tr>
            <td>0002</td>
            <td>Velocidad</td>
            <td>Velocidad que rompe la barrera del sonido</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default SuperPowers;
