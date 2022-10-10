import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Characters from './components/Characters'
import Comics from './components/Comics'

function App() {

  return (
  
      <BrowserRouter>
      <Routes>
      <Route path="/x" element={<Characters/>}/>
        <Route path="/" element={<Comics/>}>
        </Route>
      </Routes>
    </BrowserRouter>
   )
}

export default App
