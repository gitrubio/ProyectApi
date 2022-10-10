import React, { useState } from 'react'
import { ICaracter } from '../interfaces/Marvel.interfaces'
import '../App.css'
import Swal from 'sweetalert2'
export default function CardCharacter(character : ICaracter) {

   const [cardIndo, setcardIndo] = useState(false)
    
   const detalles = () =>{
    Swal.fire()
   }
    return (
        
            <div className="card" style={{padding: 0, margin: 8, cursor: 'pointer'}} onClick={()=>{setcardIndo(!cardIndo)}}>
                <img className="card-img-top" src={character.img} width={350} height={300} />
                    <div className="card-body">
                        <h4 className="card-title">{character.name}</h4>
                        <a href="#" className="btn btn-primary" onClick={()=>{detalles()}}> Ver Comics</a>
                    </div>
            </div>
    )

}
