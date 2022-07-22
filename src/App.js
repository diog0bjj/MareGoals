import React from "react";
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Main/Home/Home';
import Educacao from './Components/Main/Educacao/Educacao';
import CultureAndLeisure from './Components/Main/CultureAndLeisure/CultureAndLeisure';
import Saude from './Components/Main/Saude/Saude';
import Poluicao from './Components/Main/Poluicao/Poluicao';
import Saneamento from './Components/Main/Saneamento/Saneamento';

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  text-transform:uppercase;
  color:#fff;
}`

export default function App(){

  return(
    <Router>
      <GlobalStyle/>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Educacao" element={<Educacao/>} />
          <Route path="/CultureAndLeisure" element={<CultureAndLeisure/>} />
          <Route path="/Saude" element={<Saude/>} />
          <Route path="/Poluicao" element={<Poluicao/>} />
          <Route path="/Saneamento" element={<Saneamento/>} />
        </Routes>
      <Footer/>
    </Router>
  )
};
