import React, { useState } from 'react'
import { ICaracter } from '../interfaces/Marvel.interfaces'
import '../App.css'

export default function Card(character: ICaracter) {

    return (
        <div className="col">
            <div className="card h-100 shadow-sm">
                <img src={character.img} className="card-img-top imagen" alt="..."></img>
                <div className="card-body">
                    <div className="clearfix mb-3">
                        <span className="float-center badge rounded-pill bg-primary">{character.name}</span>
                    </div> <h5 className="card-title">
                        {character.description != '' ? character.description : 'description not available'}
                    </h5>
                </div>
            </div>
        </div>
    )

}
