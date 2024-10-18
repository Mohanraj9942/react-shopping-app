import './App.css';

import React from "react";

import { BrowserRouter,Routes,Route } from 'react-router-dom';


import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Products from './component/Products';



function App(){
  return(
    <>
     <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home /> } />
              
            <Route path="About" element={<About />} />
           
            <Route path="Contact" element={<Contact />} />
            <Route path="Products" element={<Products />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

