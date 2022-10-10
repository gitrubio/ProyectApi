import { useState } from 'react'

import './App.css'
import Characters from './components/Characters'

function App() {

  return (
   <div className='' style={{width: '100%'}}>
      <h1>MARVEL COMIC'S</h1>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'end' , paddingRight: '8%', borderRadius : 0}}>
      </div>
      <Characters ></Characters>
   </div>
  )
}

export default App
