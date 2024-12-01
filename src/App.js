import React, { useState } from 'react';
import './App.css';
import Nav from './frontend/Components/NavBar/Nav';
import Home from './frontend/Components/HomePage/Home';
import Footer from './frontend/Components/Footer/Footer';

export default function App() {
  const [navOpacity, setNavOpacity] = useState(1);

  return (
    <div className='App'>
      <Nav navOpacity={navOpacity}></Nav>
      <Home setNavOpacity={setNavOpacity}></Home>
      <Footer></Footer>
    </div>
  );
}
