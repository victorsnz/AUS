// import React, { useState } from "react";

// import Axios from "axios";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

function Superheroes() {

  const superheroes = [
    { id: 1,  name: "Superman",           year: 1938, planet: "Krypton",  status: "Vivo" },
    { id: 2,  name: "Batman",             year: 1939, planet: "",         status: "Vivo" },
    { id: 3,  name: "Mujer Maravilla",    year: 1941, planet: "",         status: "Vivo" },
    { id: 4,  name: "Flash",              year: 1956, planet: "",         status: "Vivo" },
    { id: 5,  name: "Detective Marciano", year: 1955, planet: "Marte",    status: "Vivo" },
    { id: 6,  name: "Robin",              year: 1940, planet: "",         status: "Vivo" },
    { id: 7,  name: "Krypto",             year: 1955, planet: "Krypton",  status: "Vivo" },
    { id: 8,  name: "Kid Flash",          year: 1960, planet: "",         status: "Vivo" },
    { id: 9,  name: "Hombre Halcón",      year: 1961, planet: "Thanagar", status: "Vivo" },
    { id: 10, name: "Mujer Halcón",       year: 1961, planet: "Thanagar", status: "Vivo" } 
  ];

  // const [name, setName] = useState("");
  // const [year, setYear] = useState(0);
  // const [planet, setPlanet] = useState("");
  // const [statusID, setStatusID] = useState(0);
  
  // const [newName, setNewName] = useState("");
  // const [newYear, setNewYear] = useState(0);
  // const [newPlanet, setNewPlanet] = useState("");
  // const [newStatusID, setNewStatusID] = useState(0);



  // const [superheroeList, setSuperheroeList] = useState([]);

  // const getSuperheroes = () => {
  //   Axios.get("http://localhost:3001/superheroes").then((response) => {
  //     setSuperheroeList(response.data);
  //   });
  // };

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

  const renderSuperheroes = (superheroes, index) => {
    return (
      <tr key={index}>
        <td>{superheroes.name}</td>
        <td>{superheroes.year}</td>
        <td>{superheroes.planet}</td>
        <td>{superheroes.status}</td>
      </tr>
    );
  }

  return (
    <Container>
      <h3>Superhéroes</h3>
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Año</th>
            <th>Planeta</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>{superheroes.map(renderSuperheroes)}</tbody>
      </Table>
    </Container>
  );
}

export default Superheroes;
