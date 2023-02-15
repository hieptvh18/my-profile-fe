import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import WebLayout from './layout/WebLayout';

function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebLayout />}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
