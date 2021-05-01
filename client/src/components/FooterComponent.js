import React from "react";

import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container fluid={true}>
        <Row className="justify-content-between p-3">
          <Col className="p-0 d-flex justify-content-center" md={12}>
              <div>
                Hecho por Victor Sanchez
              </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
