import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar/NavigationBarComponent";
import Home from "./components/Home/HomeComponent";
import SuperHeroes from "./components/Superheroes/SuperheroesComponent";
import SuperPowers from "./components/SuperPowers/SuperPowersComponent";
import Misions from "./components/Misions/MisionsComponent";
import Footer from "./components/Footer/FooterComponent";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/superheroes" component={SuperHeroes} />
        <Route path="/superpoderes" component={SuperPowers} />
        <Route path="/misiones" component={Misions} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
