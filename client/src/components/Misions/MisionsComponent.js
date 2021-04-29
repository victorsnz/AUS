import React from "react";
import "./MisionsComponent.css";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

function Misions() {
  return (
    <Container>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tipo Misión</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Misions;
