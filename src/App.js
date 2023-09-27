import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import MCC from './pages/contato/home/MCC/MCC';
import Home from './pages/contato/home/index';
import XBOX from './pages/contato/home/Xbox/xbox';
import Multiplayer from './pages/contato/home/Multplayer/Multplayer';


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Multplayer' element={< Multiplayer/>}/>
      <Route path='/MCC' element={< MCC/>}/>
      <Route path='/XBOX' element={< XBOX/>}/>
    </Routes>
    </BrowserRouter>
    );
}

export default App;
