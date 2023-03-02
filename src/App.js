import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import WebLayout from './layout/WebLayout';
import Login from "./pages/admin/Login";
import PageNotFound from "./pages/client/Error/PageNotFound"
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./layout/AdminLayout";
import Contact from "./components/admin/Contact";
import Profile from "./components/admin/Profile";

function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebLayout />}>
            
        </Route>
        {/* route admin */}
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="dashboard" element={<Dashboard/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
        </Route>
        {/* route page login admin */}
        <Route path="login" element={<Login/>}></Route>
        {/* route page error */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
