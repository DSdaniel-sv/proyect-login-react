import React from 'react'
import { BrowserRouter, Router, Routes } from 'react-router-dom'
import Header from '../components/Header'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='' element={<App/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router
