import React from 'react'
import { Route, Routes } from "react-router-dom";
import About from './About';
import Home from './Home';
import Contact from './Contact';
export default function Routing() {
  return (
   <Routes>
    <Route path='/' element ={<Home/>} ></Route>
    <Route path='About' element ={<About/>} ></Route>
    <Route path='Contact' element ={<Contact/>} ></Route>
   </Routes>
  )
}
