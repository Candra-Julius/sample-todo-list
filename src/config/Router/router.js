import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from '../../Pages/Add'
import Home from '../../Pages/Home'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<Add/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router