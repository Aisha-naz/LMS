import React, { Component,  useState, useEffect } from 'react';
import { Front } from './Front';
import { Contact } from './Contact';
import { RentalConditions } from './RentalConditions';
import { AboutUs } from './AboutUs';
import { Help } from './Help';
import { Browse } from './Browse';
import { User } from './User';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Admin } from './Admin';
function App(props) {
    return <>
      
        <Routes>
            <Route path="/" element={<Front/>} /> 
            <Route path="/home" element={<Front/>} />     
            <Route path="/browse/*" element={<Browse/>} ></Route>
            <Route path="/rent" element={<RentalConditions/>} /> 
            <Route path="/about" element={<AboutUs/>} /> 
            <Route path="/contact" element={<Contact/>} /> 
            <Route path="/help" element={<Help/>} /> 
            <Route path="/user/*" element={<User/>} />
            <Route path="/admin/*" element={<Admin/>} />     


        </Routes>
    </>
  }

  export default App;