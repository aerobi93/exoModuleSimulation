import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/index.scss"

import CardModule from "./componants/cardIOT";
import AddIOT from "./componants/AddIOT";
import NavBar from "./componants/navBar";
import TypeMeasure from "./componants/typeMeasure";
import Logs from "./componants/log";

const App = () => {
  return (
    <div className="app">
      <h1 className="app__title"> module I.O.T</h1>
      
      <div className="app__container">
        <Routes >
          <Route exact path='/' element={ <> <NavBar /> <CardModule /> </> } />
          <Route exact path='/newModule' element={ <> <NavBar /> <AddIOT /> </> } />
          <Route exact path='/measures' element={ <> <NavBar /> <TypeMeasure /> </> } />
          <Route exact  path= '/logs/:id' element={ <> <NavBar /> <Logs /> </> } />
          <Route exact path='/logs'  element={ <> <NavBar /> <Logs /> </> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
