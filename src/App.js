import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import WebLayout from './layout/WebLayout';
import Login from "./pages/admin/Login";
import PageNotFound from "./pages/client/Error/PageNotFound"

function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebLayout />}>
            
        </Route>
        <Route path="/admin" element={<Login/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
