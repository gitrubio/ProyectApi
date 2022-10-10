import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { server, routes } from '../database/config'
import { ICaracter } from '../interfaces/Marvel.interfaces'
import { modelarCaracters } from '../services/modelar'
import CardCharacter from './CardCharacter'

export default function Characters() {
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
            <input size={25} style={{ right: 0 }} onChange={(e) => handle(e.target.value)} placeholder='name character' ></input>
            <div className='row row-cols-5 row-cols-md-5' style={{ justifyContent: 'center' }}>
                {data()}
            </div>
        </>
    )
}
