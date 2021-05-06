import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import db from "../../services/firebase";


const EditHeroForm = ({ open, close, superhero}) => {
  
  //Colección de firebase
  const ref = db.collection("superheroes");

  const [name, setName] = useState(superhero.name);
  const [year, setYear] = useState(superhero.year);
  const [planet, setPlanet] = useState(superhero.planet);
  const [status, setStatus] = useState(superhero.status);

  // const saveName = (newName) => setName(newName); 
  // const saveYear = (newYear) => setYear(newYear); 
  // const savePlanet = (newPlanet) => setPlanet(newPlanet); 
  // const saveStatus = (newStatus) => setStatus(newStatus); 
  
  // Función EDIT
  function onEdit(e, superhero, updatedSuperhero) {
    // setLoading();
    ref
    .doc(superhero.id)
    .update(updatedSuperhero)
    .catch((err) => {
      console.error(err);
    });
    
    // e.stopPropagation();
    // e.nativeEvent.stopImmediatePropagation();
    e.preventDefault();
    close();
  }

  return (
    <Modal show={open} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Héroe</Modal.Title>
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
              onChange={(e) => setPlanet(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formHeroeStatus">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              size="md"
              type="text"
              placeholder="Ingrese el estado del superheroe"
              name="status"
              onChange={(e) => setStatus(e.target.value)}
            />
          </Form.Group>
          <div className={"modal-btn-group"}>
            <Button
              variant="success"
              type="submit"
              onClick={(e) =>
                onEdit(e, superhero, { name, year, planet, status })
              }
            >
              Confirmar
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

export default EditHeroForm;