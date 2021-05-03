import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import db from "../services/firebase";

function Misions() {

  // const misiones = [
  //   { id: 1,  cod: "0001", description: "Mision 01", tipoMision: "MR" },
  //   { id: 2,  cod: "0002", description: "Mision 02", tipoMision: "MR" },
  //   { id: 3,  cod: "0003", description: "Mision 03", tipoMision: "MR" },
  //   { id: 4,  cod: "0004", description: "Mision 04", tipoMision: "MR" },
  //   { id: 5,  cod: "0005", description: "Mision 05", tipoMision: "MSU" },
  //   { id: 6,  cod: "0006", description: "Mision 06", tipoMision: "MSU" },
  //   { id: 7,  cod: "0007", description: "Mision 07", tipoMision: "MR" },
  // ];

  const [misions, setMisions] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = db.collection("misions");

  function getMisions() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setMisions(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getMisions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <Container>
        <h2>Loading data... ⌛</h2>
      </Container>
    );
  }

  const renderMisions = misions.map((mision, index) => {
    return (
      <tr key={index}>
        <td className="col-style">{mision.cod}</td>
        <td className="col-style">{mision.description}</td>
        <td className="col-style">{mision.type}</td>
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
      <h3>Misiones</h3>
      <Table bordered size="sm">
        <thead>
          <tr>
            <th className="col-style">COD</th>
            <th className="col-style">Descripción</th>
            <th className="col-style">Tipo</th>
            <th style={{ textAlign: "center" }}>Opciones</th>
          </tr>
        </thead>
        <tbody>{renderMisions}</tbody>
      </Table>
    </Container>
  );
}

export default Misions;
