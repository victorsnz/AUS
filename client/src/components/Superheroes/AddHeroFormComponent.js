
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import db from "../../services/firebase";
import Modal from 'react-bootstrap/Modal';


const AddHeroForm = ({ open, close}) => {
  //Colección de firebase
  const ref = db.collection("superheroes");

  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [planet, setPlanet] = useState("");

  const onCreate = (e) => {
    ref
      .add({
        name: name,
        year: year,
        planet: planet,
        status: "Vivo",
      })
      .catch((err) => {
        console.error(err);
      });
    e.preventDefault();
    setName("");
    setYear("");
    setPlanet("");
    close();
  };

  return (
    <Modal show={open} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Héroe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formHeroeName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              size="md"
              type="text"
              placeholder="Ingrese Nombre"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formHeroeYear">
            <Form.Label>Año</Form.Label>
            <Form.Control
              size="md"
              type="text"
              placeholder="Ingrese Año"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formHeroePlanet">
            <Form.Label>Planeta</Form.Label>
            <Form.Control
              size="md"
              type="text"
              placeholder="Ingrese planeta de origen"
              name="planet"
              value={planet}
              onChange={(e) => setPlanet(e.target.value)}
            />
          </Form.Group>
          <div className={"modal-btn-group"}>
            <Button
              variant="success"
              type="submit"
              onClick={onCreate}
            >
              Crear
            </Button>
            <span> </span>
            <Button variant="secondary" onClick={close}>
              Cancelar
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddHeroForm;