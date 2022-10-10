export interface IMarvel {
    comics : IComics
    description : string 
    events : {}
    name : string
    resourceURI : string
    series? : {}
    stories? : {}
    id: number
    thumbnail? : IThumbnail

 }

 export interface IComics {
    available : number
    collectionURL : string
    returned : number
    
    items : IComiccharacter[]

 }

 export interface IComic {
    name : string
    resourceURL : string
 }

export interface ICaracter {
   name : string
   description: string 
   img : string
   comics: IComiccharacter[]
}

interface IThumbnail {
    extension : string
    path : string 
}

interface IComiccharacter {
    name : string
    resourceURI : string
}