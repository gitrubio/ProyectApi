import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server, routes } from '../database/config'
import { ICaracter } from '../interfaces/Marvel.interfaces'
import { modelarCaracters } from '../services/modelar'
import CardCharacter from './Card'
import Tablet from './Tablet'

export default function Layout() {
    const [characters, setCharacters] = useState([] as ICaracter[])
    const [filtro, setfiltro] = useState('')
    useEffect(() => {
        obtenerDatos()
    }, [])

    const handle = (value: string) => {
        setfiltro(value)
    }
    const obtenerDatos = () => {
        axios.get(`${server.host}/${routes.characters}`).then((res) => {
            setCharacters(modelarCaracters(res.data.data.results))
        })
    }
    const data = () => { 
        return   characters.filter((char) => (
            char.name.toLowerCase()).includes(filtro.trim().toLowerCase()))
            .map((char) => 
            <CardCharacter description={char.description} comics={char.comics} name={char.name} img={char.img}/>)
     
   
    }
    return (
        <>
        
        <div className='filter'> 
        <span>ingrese el nombre del comic</span>
        <input type="text" />
        
        </div>
        <Tablet/>
        </>
    )
}
