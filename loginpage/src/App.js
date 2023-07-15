import React from "react";
import {BrowerRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from "./Components/Login";
import Signin from "./Components/Signin";
import Home from "./Components/Home";
import './Styles/form.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default  App;
