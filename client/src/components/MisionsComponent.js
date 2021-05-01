import React from "react";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

function Misions() {

  const misiones = [
    { id: 1,  cod: "0001", description: "Mision 01", tipoMision: "MR" },
    { id: 2,  cod: "0002", description: "Mision 02", tipoMision: "MR" },
    { id: 3,  cod: "0003", description: "Mision 03", tipoMision: "MR" },
    { id: 4,  cod: "0004", description: "Mision 04", tipoMision: "MR" },
    { id: 5,  cod: "0005", description: "Mision 05", tipoMision: "MSU" },
    { id: 6,  cod: "0006", description: "Mision 06", tipoMision: "MSU" },
    { id: 7,  cod: "0007", description: "Mision 07", tipoMision: "MR" },
  ];

  const renderMisiones = (misiones, index) => {
    return (
      <tr key={ index }>
        <td>{ misiones.cod }</td>
        <td>{ misiones.description }</td>
        <td>{ misiones.tipoMision }</td>
      </tr>
    );
  };

  return (
    <Container>
      <h3>Misiones</h3>
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th>COD</th>
            <th>Descripción</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>{misiones.map(renderMisiones)}</tbody>
      </Table>
    </Container>
  );
}

export default Misions;
