import React from 'react';
import './App.css';
import Router from './Router'
// import Navbar from './component/navbar'
import Navbar from './navbar'
import {CartProvider} from  './cartContext'

function App() {
  return (
    <CartProvider>
    <div className="">
        <Navbar />
        <Router />
    
    </div>
    </CartProvider>
  );
}

export default App;
