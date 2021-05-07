import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import AddHeroForm from "./AddHeroFormComponent";
import EditHeroForm from './EditHeroFormComponent';

import db from "../../services/firebase";


const Superheroes = () => {

  const ref = db.collection("superheroes");

  const [loading, setLoading] = useState(false);

  const [superheroes, setSuperheroes] = useState([]);

  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  
  const [selectedHero, setSelectedHero] = useState("");

  const openAddModal = () => setShowAdd(true);
  const closeAddModal = () => setShowAdd(false);

  const openEditModal = () => setShowEdit(true);
  const closeEditModal = () => setShowEdit(false);
  
  const saveHero = (superhero) => setSelectedHero(superhero);


  function getSuperheroes() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        let currentID = doc.id;
        let appObj = { ...doc.data(), id: currentID };
        items.push(appObj);
      });
      setSuperheroes(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getSuperheroes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ------------------------------------------------
      Las función CREATE está en AddHeroFormComponent.js
     ------------------------------------------------ 
      Las función EDIT está en EditHeroFormComponent.js
     ------------------------------------------------ 
  */

  //Función DELETE
  function onDelete(id) {

    if (window.confirm("¿Desea eliminar a este superheroe?")) { 
      ref
      .doc(id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
    }
  }

  function saveHeroAndOpenModal(superhero) {
    saveHero(superhero);
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
  const renderSuperheroes = superheroes.map((superhero, index) => {
    return (
      <tr key={index} className={"tr-style"}>
        <td>{superhero.name}</td>
        <td>{superhero.year}</td>
        <td>{superhero.planet}</td>
        <td>{superhero.status}</td>
        <td style={{ textAlign: "center" }}>
          <ButtonGroup aria-label="option">
            <Button
              className="btn-option btn-sm shadow-none"
              variant="outline-warning"
              onClick={() => saveHeroAndOpenModal(superhero)}
            >
              <span className="material-icons">mode_edit</span>
            </Button>
            <Button
              className="btn-option btn-sm shadow-none"
              variant="outline-danger"
              onClick={() => onDelete(superhero.id)}
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
              <h3 className="header-title">Superhéroes</h3>
            </Col>
            <Col md={2}>
              <Button
                className="header-btn shadow-none"
                variant="outline-light"
                onClick={openAddModal}
              >
                Agregar Héroe
              </Button>
            </Col>
          </Row>
        </Card>

        {superheroes.length === 0 ? (
          <Card className={"no-data-card"}>No hay datos para mostrar...</Card>
        ) : (
          <Table bordered size="md" responsive="sm">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Año</th>
                <th>Planeta</th>
                <th>Estado</th>
                <th style={{ textAlign: "center" }}>Opciones</th>
              </tr>
            </thead>
            <tbody>{renderSuperheroes}</tbody>
          </Table>
        )}
      </Container>
      <AddHeroForm open={showAdd} close={closeAddModal} />
      <EditHeroForm
        open={showEdit}
        close={closeEditModal}
        superhero={selectedHero}
      />
    </>
  );
}

export default Superheroes;
