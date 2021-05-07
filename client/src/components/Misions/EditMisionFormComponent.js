import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import db from "../../services/firebase";


const EditMisionForm = ({ open, close, mision}) => {
  
  //Colección de firebase
  const ref = db.collection("misions");

  const [description, setDescription] = useState("");
  const [type, setType] = useState(""); 
  
  // Función EDIT
  function onEdit(e, mision, updatedMision) {

    ref
    .doc(mision.id)
    .update(updatedMision)
    .catch((err) => {
      console.error(err);
    });
    
    e.preventDefault();
    close();
  }

  return (
    <Modal show={open} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Misión</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formMisionDescription">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              size="md"
              type="text"
              name="description"
              value={mision.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formMisionType">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              size="md"
              type="text"
              name="type"
              value={mision.type}
              onChange={(e) => setType(e.target.value)}
            />
          </Form.Group>
          <div className={"modal-btn-group"}>
            <Button
              variant="success"
              type="submit"
              onClick={(e) => onEdit(e, mision, { description, type })}
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

export default EditMisionForm;