import React from "react"

export const server = {
    host : 'https://gateway.marvel.com:443/v1/public/',
    key : '49e0149dde47ab3cc08430a53e027270',
    hash : '774c091de14fa5266ba97570b811960b'
}

export enum routes {
    characters = "characters?ts=10&apikey=49e0149dde47ab3cc08430a53e027270&hash=774c091de14fa5266ba97570b811960b",
    comics = "comics?apikey=49e0149dde47ab3cc08430a53e027270"
}