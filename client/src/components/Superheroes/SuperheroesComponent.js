import React from "react";
import "./SuperheroesComponent.css";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

function Superheroes() {
  return (
    <Container>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Año</th>
            <th>Planeta</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Superman</td>
            <td>1935</td>
            <td>Krypton</td>
            <td>Vivo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Batman</td>
            <td>1936</td>
            <td>NULL</td>
            <td>Vivo</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Superheroes;
