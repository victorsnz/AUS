import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import db from "../../services/firebase";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AddMisionForm from "./AddMisionFormComponent";
import EditMisionForm from "./EditMisionFormComponent";

function Misions() {
  const ref = db.collection("misions");

  const [loading, setLoading] = useState(false);

  const [misions, setMisions] = useState([]);

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const [selectedMision, setSelectedMision] = useState("");

  const openAddModal = () => setShowAdd(true);
  const closeAddModal = () => setShowAdd(false);

  const openEditModal = () => setShowEdit(true);
  const closeEditModal = () => setShowEdit(false);

  const saveMision = (mision) => setSelectedMision(mision);

  function getMisions() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        let currentID = doc.id;
        let appObj = { ...doc.data(), id: currentID };
        items.push(appObj);
      });
      setMisions(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getMisions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ------------------------------------------------
      Las función CREATE está en AddFormComponent.js
     ------------------------------------------------ 
      Las función EDIT está en EditFormComponent.js
     ------------------------------------------------ 
  */

  //Función DELETE
  function onDelete(id) {
    if (window.confirm("¿Desea eliminar esta misión?")) { 
      ref
        .doc(id)
        .delete()
        .catch((err) => {
          console.error(err);
        });
    }  
  }

  function saveMisionAndOpenModal(mision) {
    saveMision(mision);
    openEditModal();
  }

  if (loading) {
    return (
      <Container>
        <h2>Loading data... ⌛</h2>
      </Container>
    );
  }

  // Muestra los datos de la tabla y los botones
  const renderMisions = misions.map((mision, index) => {
    return (
      <tr key={index}>
        <td>{mision.cod}</td>
        <td>{mision.description}</td>
        <td>{mision.type}</td>
        <td style={{ textAlign: "center" }}>
          <ButtonGroup aria-label="option">
            <Button
              className="btn-option btn-sm shadow-none"
              variant="outline-warning"
              onClick={() => saveMisionAndOpenModal(mision)}
            >
              <span className="material-icons">mode_edit</span>
            </Button>
            <Button
              className="btn-option btn-sm shadow-none"
              variant="outline-danger"
              onClick={() => onDelete(mision.id)}
            >
              <span className="material-icons">delete</span>
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });

  return (
    <>
      <Container>
        <Card className="header-card">
          <Row>
            <Col md={10}>
              <h3 className="header-title">Misiones</h3>
            </Col>
            <Col md={2}>
              <Button
                className="header-btn shadow-none"
                variant="outline-light"
                onClick={openAddModal}
              >
                Agregar Misión
              </Button>
            </Col>
          </Row>
        </Card>
        {misions.length === 0 ? (
            <Card className={"no-data-card"}>No hay datos para mostrar...</Card>
          ) : (
        <Table bordered size="md">
          <thead>
            <tr>
              <th>COD</th>
              <th>Descripción</th>
              <th>Tipo</th>
              <th style={{ textAlign: "center" }}>Opciones</th>
            </tr>
          </thead>
          <tbody>{renderMisions}</tbody>
        </Table>
        )}
      </Container>
      <AddMisionForm open={showAdd} close={closeAddModal} />
        <EditMisionForm
          open={showEdit}
          close={closeEditModal}
          mision={selectedMision}
        />
      </>
  );
}

export default Misions;
