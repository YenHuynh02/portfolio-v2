import React from 'react';
import './App.css';
import Nav from './frontend/NavBar/Nav';
import Home from './frontend/HomePage/Home';

export default function App() {

  return (
    <div className='App'>
      <Nav></Nav>
      <Home></Home>
    </div>
  );
}
