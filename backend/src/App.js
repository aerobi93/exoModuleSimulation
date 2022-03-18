import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss"

import CardModule from "./componants/cardIOT";
import AddIOT from "./componants/AddIOT";
import NavBar from "./componants/navBar";
import TypeMeasure from "./componants/typeMeasure";

const App = () => {
  return (
    <div className="app">
      <h1 className="app__title"> module I.O.T</h1>
      <NavBar />
      <div className="app__container">
        <Routes >
          <Route exact path='/' element={ <CardModule />} />
          <Route exact path='/newModule' element={ <AddIOT /> } />
          <Route exact path='/measures' element={ <TypeMeasure /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
