import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Inicio from '../Pages/Inicio'
import Login from '../Pages/Login'
import Contacto from '../Pages/Contacto'
import Nosotros from '../Pages/Nosotros'
import '../Pages/Nosotros.css'
import '../Pages/Contacto.css'
import '../Pages/Login.css'
import '../components/Header.css'

const Router=()=>{
  return(
      <BrowserRouter>
      <Header/>
          <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/nosotros" element={<Nosotros/>}></Route>
            <Route path="/contacto" element={<Contacto/>}></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default Router
