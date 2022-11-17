import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from '../Pages/Login'

const Router=()=>{
  return(
      <BrowserRouter>
      {/* <Header></Header> */}
      {/* aca creamos alas rutas */}
          <Routes>
              <Route path="/Login" element={<Login/>}></Route>
              {/* <Route path="/imagen" element={<Principalimg/>}></Route>
              <Route path="/rutas" element={<Rutas/>}></Route> */}
          </Routes>
      </BrowserRouter>
  )
}

export default Router