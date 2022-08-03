import './App.css';
import React from 'react';
import {HashRouter, Routes, Route, Navigate} from "react-router-dom";
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Twitter from './components/Twitter';
import Instagram from './components/Instagram';
import Contacts from './components/Contacts';
import ContactsPages from './components/ContactsPages';

function App() {
  return (
    <HashRouter basename='/'>
      <Navbar />
          <Routes>
            <Route exact path='/homepage' element={<Homepage />}></Route>
            <Route exact path="/" element={ <Navigate to="/homepage" /> }></Route>
            <Route exact path='/twitter' element={<Twitter />}></Route>
            <Route exact path='/instagram' element={<Instagram />}></Route>
            <Route exact path='/contacts' element={<Contacts />}></Route>
            <Route exact path='/contacts/:username' element={<ContactsPages />}></Route>
          </Routes>
    </HashRouter>
  );
}

export default App;
