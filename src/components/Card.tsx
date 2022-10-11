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
        <div className="col">
        <div className="card h-100 shadow-sm">
            <img src="https://www.freepnglogos.com/uploads/notebook-png/download-laptop-notebook-png-image-png-image-pngimg-2.png" className="card-img-top" alt="..."></img>
            <div className="card-body">
                <div className="clearfix mb-3">
                    <span className="float-start badge rounded-pill bg-primary">ASUS Rog</span>
                    <span className="float-end price-hp">12354.00&euro;</span> </div> <h5 className="card-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem eaque ut eveniet aut quis rerum. Asperiores accusamus harum ducimus velit odit ut. Saepe, iste optio laudantium sed aliquam sequi.</h5>
                <div className="text-center my-4"> <a href="#" className="btn btn-warning">Check offer</a>
                </div>
            </div>
        </div>
    </div>
    )

}
