import logo from "./logo.svg";
// import React from "react";

import { useState, useEffect} from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import ItemListContainer from "./Components/ItemListContainer";
import React, { Component } from 'react';
import ItemCount  from "./Components/ItemCount";

function App() {
    
const [numero,setNumero] = useState(0);
useEffect(() =>
{
console.log('Stock subido ')
},[]);
console.log('Stock por incrementar')


useEffect(() =>
{
  console.log("stock decrementar")
},[])
console.log('Stock por decrementar')

const incrementar = () =>
 {
  console.log('incrementar');
   setNumero(numero + 1)
 };

 const decrementar = () =>
 {
   console.log('decrementar');
   setNumero(numero - 1);
 };
 
  return (
    <div className="App">
      {    
       numero <5 && numero > -1 ? (<ItemCount numero={numero}/>) :
        (<h6>No existe stock de casas para agregar</h6>)
      }
      <NavBar />
      <ItemListContainer title="Bienvenidos a la Inmobiliaria mas accesible de tu pais."/>
      {/* <ItemCount stock={3} initial={1} onAdd={onAdd} /> */}


    <button onClick={incrementar}>Presionar Incremento</button>
    <button onClick={decrementar}>Presionar decremento</button>
   
    </div>
  );
}

export default App;
