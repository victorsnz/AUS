import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import db from "../../services/firebase";

function SuperPowers() {

  const ref = db.collection("superPowers");

  const [superPowers, setSuperPowers] = useState([]);
  const [loading, setLoading] = useState(false);


  function getSuperPowers() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        let currentID = doc.id;
        let appObj = { ...doc.data(), id: currentID };
        items.push(appObj);
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
        <td>{superPower.cod}</td>
        <td>{superPower.name}</td>
        <td>{superPower.description}</td>
      </tr>
    );
  });

  return (
    <Container>
      <Card className="header-card">
        <Row>
          <Col md={12}>
            <h3 className="header-title">Super Poderes</h3>
          </Col>
        </Row>
      </Card>

      <Table bordered size="md">
        <thead>
          <tr>
            <th>COD</th>
            <th>Nombre</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>{renderSuperPowers}</tbody>
      </Table>
    </Container>
  );
}

export default SuperPowers;
