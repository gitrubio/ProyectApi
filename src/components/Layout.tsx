import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server, routes } from '../database/config'
import { ICaracter } from '../interfaces/Marvel.interfaces'
import { modelarCaracters } from '../services/modelar'
import Card from './Card'
import Tablet from './Tablet'

export default function Layout() {
    const [characters, setCharacters] = useState([] as ICaracter[])

useEffect(() => {
        obtenerDatos()
}, [])
const obtenerDatos = () => {
        axios.get(`${server.host}/${routes.characters}`).then((res) => {
            setCharacters(modelarCaracters(res.data.data.results))
        })
}
    return (
      <>
        <div><h1>MARVEL API</h1></div>
         {characters.length > 0 ? <Tablet characters={characters}/> : <div className="lds-dual-ring"></div>}
      </>
    )
}
