import React from "react";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

function SuperPowers() {
  
  const superPowers = [
    { id: 1,  cod: "0001", name: "Fuerza",              description: "Fuerza más allá de la humana" },
    { id: 2,  cod: "0002", name: "Velocidad",           description: "Velocidad que rompe la barrera del sonido" },
    { id: 3,  cod: "0003", name: "Vuelo",               description: "Capacidad de volar" },
    { id: 4,  cod: "0004", name: "Invisibilidad",       description: "Habilidad de hacer que el usuario sea invisible a simple vista" },
    { id: 5,  cod: "0005", name: "Invulnerabilidad",    description: "Capacidad de ser inmune a una o más formas de daño físico, mental y espiritual y su influencia" },
    { id: 6,  cod: "0006", name: "Vision Caliente",     description: "Capacidad de quemar objetos con la mirada" },
    { id: 7,  cod: "0007", name: "Omnilingüismo",       description: "Habilidad para entender cualquier forma de lenguaje" },
    { id: 8,  cod: "0008", name: "Control de densidad", description: "Capacidad de incrementar o disminuir la densidad natural de un objeto o de sí mismo" },
    { id: 9,  cod: "0009", name: "Intangibilidad",      description: "Capacidad de traspasar la materia sólida sin sufrir daño alguno" },
    { id: 10, cod: "0010", name: "Magia",               description: "El uso de magia" },
  ];
  
  const renderSuperPowers = (superPowers, index) => {
    return (
      <tr key={index}>
        <td>{superPowers.cod}</td>
        <td>{superPowers.name}</td>
        <td>{superPowers.description}</td>
      </tr>
    );
  };

  return (
    <Container>
      <h3>Super Poderes</h3>
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th>COD</th>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>{superPowers.map(renderSuperPowers)}</tbody>
      </Table>
    </Container>
  );
}

export default SuperPowers;
