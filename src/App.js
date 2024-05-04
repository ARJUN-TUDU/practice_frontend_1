import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Routes,Route  } from 'react-router-dom';
import Home from './pages/Home';

function App(){
  
  

  return (
     <Routes>
          
          <Route path = "/home" element = {<Home/>}/>

     </Routes>
  );
}

export default App;
