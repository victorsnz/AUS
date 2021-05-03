import React, { useState, useEffect } from "react";

// import Axios from "axios";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import db from "../services/firebase";


function Superheroes() {

  // const superheroes = [
  //   { id: 1,  name: "Superman",           year: 1938, planet: "Krypton",  status: "Vivo" },
  //   { id: 2,  name: "Batman",             year: 1939, planet: "",         status: "Vivo" },
  //   { id: 3,  name: "Mujer Maravilla",    year: 1941, planet: "",         status: "Vivo" },
  //   { id: 4,  name: "Flash",              year: 1956, planet: "",         status: "Vivo" },
  //   { id: 5,  name: "Detective Marciano", year: 1955, planet: "Marte",    status: "Vivo" },
  //   { id: 6,  name: "Robin",              year: 1940, planet: "",         status: "Vivo" },
  //   { id: 7,  name: "Krypto",             year: 1955, planet: "Krypton",  status: "Vivo" },
  //   { id: 8,  name: "Kid Flash",          year: 1960, planet: "",         status: "Vivo" },
  //   { id: 9,  name: "Hombre Halcón",      year: 1961, planet: "Thanagar", status: "Vivo" },
  //   { id: 10, name: "Mujer Halcón",       year: 1961, planet: "Thanagar", status: "Vivo" } 
  // ];

    const [superheroes, setSuperheroes] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = db.collection("superheroes");

  // const [name, setName] = useState("");
  // const [year, setYear] = useState(0);
  // const [planet, setPlanet] = useState("");
  // const [statusID, setStatusID] = useState(0);
  
  // const [newName, setNewName] = useState("");
  // const [newYear, setNewYear] = useState(0);
  // const [newPlanet, setNewPlanet] = useState("");
  // const [newStatusID, setNewStatusID] = useState(0);


  function getSuperheroes() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setSuperheroes(items);
      setLoading(false);
    });
  }

  // const addSuperheroe = () => {
  //   Axios.post("http://localhost:3001/create", {
  //     name: name,
  //     year: year,
  //     planet: planet,
  //     statusID:statusID,
  //   }).then(() => {
  //     setSuperheroeList([
  //       ...superheroeList,
  //       {
  //         name: name,
  //         year: year,
  //         planet: planet,
  //         statusID: statusID,
  //       },
  //     ]);
  //   });
  // };

  // const updateSuperheroe = (id) => {
  //   Axios.put("http://localhost:3001/update", {
  //     id: id,
  //     name: newName,
  //     year: newYear,
  //     planet: newPlanet,
  //     statusID: newStatusID
  //   }).then((response) => {
  //     setSuperheroeList(
  //       superheroeList.map((val) => {
  //         return val.id == id
  //           ? {
  //               id: val.id,
  //               name: newName,
  //               year: newYear,
  //               planet: newPlanet,
  //               statusID: newStatusID,
  //             }
  //           : val;
  //       })
  //     );
  //   });
  // };

  // const deleteSuperheroe = (id) => {
  //   Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
  //     setSuperheroeList(
  //       superheroeList.filter((val) => {
  //         return val.id != id;
  //       })
  //     );
  //   });
  // };

  useEffect(() => {
    getSuperheroes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <Container>
        <h2>Loading data... ⌛</h2>
      </Container>
    );
  }

  const renderSuperheroes = superheroes.map((superheroe, index) => {
    return (
      <tr key={index}>
        <td className="col-style">{superheroe.name}</td>
        <td className="col-style">{superheroe.year}</td>
        <td className="col-style">{superheroe.planet}</td>
        <td className="col-style">{superheroe.status}</td>
        <td style={{ textAlign: "center" }}>
          <ButtonGroup aria-label="option">
            <Button variant="primary">
              <Link to={"/heroe-sheet"}>
                <i className="material-icons">
                  <span className="material-icons btn-icon-color">
                    portrait
                  </span>
                </i>
              </Link>
            </Button>
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
      <h3>Superhéroes</h3>
      <Table bordered size="sm">
        <thead>
          <tr>
            <th className="col-style">Nombre</th>
            <th className="col-style">Año</th>
            <th className="col-style">Planeta</th>
            <th className="col-style">Estado</th>
            <th style={{ textAlign: "center" }}>Opciones</th>
          </tr>
        </thead>
        <tbody>{renderSuperheroes}</tbody>
      </Table>
    </Container>
  );
}

export default Superheroes;
