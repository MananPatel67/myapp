import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import { Router } from "react-router-dom";
import './App.css';
import Intro from './Components/Intro';
import Navbar from './Navigation/Navbar';
import Home from "./Components/Home";
import React from "react";
import ToDo from "./Components/ToDo";
import ToPay from "./Components/ToPay";
import NavNew from "./Navigation/NavNew";
import SearchBar from "./Navigation/SearchBar";
import DateTime from "./Components/DateTime";
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar/>
      {/* <NavNew/> */}
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/todo" element={<ToDo/>}/>
          <Route exact path="/topay" element={<ToPay/>}/>
        </Routes>
      
      {/* <Intro /> */}
      <DateTime/>
      <Footer></Footer>

    </div>
  );
}

export default App;
