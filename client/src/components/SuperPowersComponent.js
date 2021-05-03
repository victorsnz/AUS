import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import db from "../services/firebase";

function SuperPowers() {
  // const superPowers = [
  //   { id: 1,  cod: "0001", name: "Fuerza",              description: "Fuerza más allá de la humana" },
  //   { id: 2,  cod: "0002", name: "Velocidad",           description: "Velocidad que rompe la barrera del sonido" },
  //   { id: 3,  cod: "0003", name: "Vuelo",               description: "Capacidad de volar" },
  //   { id: 4,  cod: "0004", name: "Invisibilidad",       description: "Habilidad de hacer que el usuario sea invisible a simple vista" },
  //   { id: 5,  cod: "0005", name: "Invulnerabilidad",    description: "Capacidad de ser inmune a una o más formas de daño físico, mental y espiritual y su influencia" },
  //   { id: 6,  cod: "0006", name: "Vision Caliente",     description: "Capacidad de quemar objetos con la mirada" },
  //   { id: 7,  cod: "0007", name: "Omnilingüismo",       description: "Habilidad para entender cualquier forma de lenguaje" },
  //   { id: 8,  cod: "0008", name: "Control de densidad", description: "Capacidad de incrementar o disminuir la densidad natural de un objeto o de sí mismo" },
  //   { id: 9,  cod: "0009", name: "Intangibilidad",      description: "Capacidad de traspasar la materia sólida sin sufrir daño alguno" },
  //   { id: 10, cod: "0010", name: "Magia",               description: "El uso de magia" },
  // ];

  const [superPowers, setSuperPowers] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = db.collection("superPowers");

  function getSuperPowers() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setSuperPowers(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getSuperPowers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Container>
        <h2>
          Loading data... ⌛
        </h2>
      </Container>;
  }

  const renderSuperPowers = superPowers.map((superPower, index) => {
    return (
      <tr key={index}>
        <td className="col-style">{superPower.cod}</td>
        <td className="col-style">{superPower.name}</td>
        <td className="col-style">{superPower.description}</td>
        <td style={{ textAlign: "center" }}>
          <ButtonGroup aria-label="option">
            <Button variant="warning">
              <i className="material-icons">
                <span className="material-icons btn-icon-color">mode_edit</span>
              </i>
            </Button>
            <Button variant="danger">
              <span className="material-icons btn-icon-color">delete</span>
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });

  return (
    <Container>
      <h3>Super Poderes</h3>
      <Table bordered size="sm">
        <thead>
          <tr>
            <th className={"col-style"}>COD</th>
            <th className={"col-style"}>Nombre</th>
            <th className={"col-style"}>Descripción</th>
            <th style={{ textAlign: "center" }}>Opciones</th>
          </tr>
        </thead>
        <tbody>{renderSuperPowers}</tbody>
      </Table>
    </Container>
  );
}

export default SuperPowers;
