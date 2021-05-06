
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import db from "../../services/firebase";
import Modal from 'react-bootstrap/Modal';


const AddMisionForm = ({ open, close}) => {
  //Colección de firebase
  const ref = db.collection("misions");

  // const [cod, setCod] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");

  const onCreate = (e) => {
    
    function randomCOD() {
      return Math.floor(
        Math.random() * (9999 - 0 + 1) + 0
      );
    }

    function padLeadingZeros(num) {
      var s = num + "";
      while (s.length < 4) s = "0" + s;
      return s;
    }

    const newCod = padLeadingZeros(randomCOD());

    ref
      .add({
        cod: newCod,
        description: description,
        type: type,
      })
      .catch((err) => {
        console.error(err);
      });
    e.preventDefault();
    // setCod("");
    setDescription("");
    setType("");
    close();
  };

  return (
    <Modal show={open} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Misión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formMisionDescription">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              size="md"
              type="text"
              placeholder="Ingrese una descripción"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formMisionType">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              size="md"
              type="text"
              placeholder="Ingrese el tipo de Misión"
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
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

export default AddMisionForm;