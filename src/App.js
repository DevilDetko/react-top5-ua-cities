import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IvanoF from "./components/pages/IvanoF";
import lviv from "./components/pages/lviv";
import Vinnytsia from "./components/pages/Vinnytsia";
import Kharkiv from "./components/pages/Kharkiv";
import Ternopil from "./components/pages/Ternopil";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/IvanoF" component={IvanoF} />
          <Route path="/lviv" component={lviv} />
          <Route path="/Vinnytsia" component={Vinnytsia} />
          <Route path="/Kharkiv" component={Kharkiv} />
          <Route path="/Ternopil" component={Ternopil} />

          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
