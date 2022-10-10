import React from "react";
import { IMarvel } from "../interfaces/Marvel.interfaces";



export const modelarCaracters  = (data: IMarvel[]) => {
    return data.map((dato) => {
        return {
            name: dato.name,
            img: `${dato.thumbnail?.path}.${dato.thumbnail?.extension}`,
            comics : dato.comics.items,
            description : dato.description
        }
    })
}
