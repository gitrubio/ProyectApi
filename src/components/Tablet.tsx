import React, { useState, useEffect } from 'react'
import { ICaracter } from '../interfaces/Marvel.interfaces'
import Card from './Card'
export default function Tablet(props: { characters: ICaracter[] }) {
    const [paginator, setPaginator] = useState(1)
    const maxItems = 8;


    const viewData = () => {
        return props.characters.filter((char, index) => index >= ((paginator - 1) * maxItems) && index < (paginator * maxItems)).map((char, index) =>
            <Card key={index} description={char.description} comics={char.comics} name={char.name} img={char.img} />
        )

    }
    const indexPaginator = () => {
        const pages = [] as any[]

        for (let index = 0; index < Math.ceil(props.characters.length / maxItems); index++) {
            pages.push(
                <a id={(index + 1).toString()} className={paginator==(index + 1) ? 'active': ''} onClick={() => { setPaginator(index + 1) }}><li>{index + 1}</li></a>
            )

        }

        return pages
    }

    return (
        <>
       <div className='paginator-center'>
       <div className="pagination page">
                <ul>
                    <a ><li>{'<'}</li></a>
                    {indexPaginator()} 
                    <a ><li>{'>'}</li></a>
                </ul>
            </div>
       </div>

            <div className="container-fluid bg-trasparent my-4 p-3" style={{ position: 'relative' }}>
                <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
                    {props.characters.length <= maxItems ? props.characters.map((char, index) =>
                        <Card key={index} description={char.description} comics={char.comics} name={char.name} img={char.img} />)
                        : viewData()}
                </div>
            </div>
        </>
    )
}
